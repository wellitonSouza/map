import React from "react";
import Header from "./Pages/Header";
import Main from "./Pages/Main";
import Filtro  from "./Pages/Filtro";
import List from "./Pages/List";
import Mapa from "./Pages/Map";

export default function App() {

  return (
    <>
      <Header>
        <h1>Desempenho das Lojas</h1>
        
      </Header>
      <Main>
        <Filtro/>
        <List />
        <Mapa />
      </Main>
    </>
  );
}
