import React, { useEffect, useState } from 'react';

import { InputText, Label } from "../../Commons/Input";
import { useDispatch, useSelector,  } from 'react-redux';
import { Content, Div } from './style';
import { getAllLocations } from '../../store/fatchActions';
import { setLocationFilteredStore } from '../../store/locationFIltered';
import { setLocationStore } from '../../store/location';
import { findFaturamento, findLoja, locationsLimit } from '../../Helper';



export default function Filtro( ) {
  const [ pesquisa, setPesquisa ] = useState("");
  const [ faturamento, setFaturamento ] = useState();
  const [location, setLocation] = useState([]);
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.location.value);

  async function getLocation(){
    const info = await getAllLocations();    
    setLocation(info);
   
    dispatch(setLocationStore(info));
    dispatch(setLocationFilteredStore(info));
  }

  function pesquisaLoja(name){
    dispatch(setLocationFilteredStore(findLoja(name,locations)));

    setPesquisa(name);
  }

  function buscaFaturamento(valor){
    if(valor > 10000){
      dispatch(setLocationFilteredStore(findFaturamento(valor, locations)));
    }else if(valor.length === 0){
      dispatch(setLocationFilteredStore(locations));
    }
    setFaturamento(valor)
  }

  useEffect(() => {
    if(location.length === 0){
      getLocation();
    }
  }, [ ]);


    return (
      <Div>
        <Content>
          <InputText placeholder="Pesquisa" type="text" value={pesquisa} onChange={ e => pesquisaLoja(e.target.value)}/>
        </Content>
        <Content>
           <Label>Faturamento mínimo esperado</Label>
          <InputText placeholder="15.000,00" type="number" value={faturamento} onChange={e => buscaFaturamento(e.target.value)} />
        </Content>
      </Div>
    );
  }
  