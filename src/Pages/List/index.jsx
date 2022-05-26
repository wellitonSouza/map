import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "../../Commons/Content";
import { faturamentoMinimo, locationsLimit, pagesIndex } from "../../Helper";
import { Button, Image, Pages, Table, Td, Th, Tr } from "./Styled";
import Left from "../../Commons/img/left.svg";
import Right from "../../Commons/img/right.svg";
import { setPage } from "../../store/pages";

export default function List() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.pages.value);
  const locationsFiltered = useSelector(
    (state) => state.locationFiltered.value
  );
  const [locations, setLocation] = useState([]);
  const [listPages, setListPages] = useState([]);

  function changePage(value) {
    dispatch(setPage(value));
  }

  function nextPage(){
    if(page < locationsFiltered.length / 10 )
      dispatch(setPage(page+1));
  }

  function beforePage(){
    if(page>1){
      dispatch(setPage(page-1));
    }
    
  }

  useEffect(() => {
    setLocation(locationsLimit(page, locationsFiltered));
    setListPages(pagesIndex(locationsFiltered.length / 10));
  }, [locationsFiltered, page]); 

  return (
    <Content>
      <Table>
        <Tr>
          <Th>Loja</Th>
          <Th>Faturamento</Th>
        </Tr>
        {locations.map((location) => {
          return (
            <Tr key={location.id}>
              <Td faturamento={faturamentoMinimo(location.revenue)}>
                {location.name}
              </Td>
              <Td faturamento={faturamentoMinimo(location.revenue)}>
                {location.revenue}
              </Td>
            </Tr>
          );
        })}
      </Table>
      <Pages>
        <Button onClick={() =>{beforePage()}}>
          <Image src={Left} alt="" />
        </Button>
        {
          listPages.map((value)=>{
            return(<Button onClick={() =>{changePage(value)}}>{value}</Button>)
          })
        }
        <Button  onClick={() =>{nextPage()}}>
          <Image src={Right} alt="" />
        </Button>
      </Pages>
    </Content>
  );
}
