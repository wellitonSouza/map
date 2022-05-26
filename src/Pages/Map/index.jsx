import React, { useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { Content } from "./style";
import { useSelector } from "react-redux";
import { faturamentoMinimo, locationsLimit } from "../../Helper";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoid2VsbGl0b24iLCJhIjoiY2wwbnk2b20yMWwxdTNla2NxeDR1YTlzZCJ9.ES1qzN_D4PA7qCj7Q678MA";

export default function Mapa() {
  const locationsFiltered = useSelector((state) => state.locationFiltered.value);
  const page = useSelector((state) => state.pages.value);
  const [locations, setLocation] = useState([]);
  const [ latitude, setLatitude ] = useState('-23.568767');
  const [ longitude, setLongitude ] = useState('-46.649907');


  useEffect(() => {
    setLocation(locationsLimit(page,locationsFiltered));
    if (locations.length !== 0) {
      setLatitude(locations[0].latitude);
      setLongitude(locations[0].longitude);
    }
  }, [locationsFiltered, page]);


  return (
    <Content>
      <Map
        initialViewState={{
          latitude: latitude,
          longitude: longitude,
          zoom: 13,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {locations.map((location) => {  
          return (
            <Marker
              key={location.id}
              longitude={location.longitude}
              latitude={location.latitude}              
              color={faturamentoMinimo(location.revenue) ? "red" : "blue"}
            >
              </Marker>
          );
        })}
      </Map>
    </Content>
  );
}

