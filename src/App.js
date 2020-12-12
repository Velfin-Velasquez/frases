import React from "react";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: #007d35;
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;


export const App = () => {

  const consultarAPI = ()=>{
    console.log("escribiendo..");
  }

  return (
    <Contenedor>
    <Boton
    onClick={consultarAPI}
    >
      Obtener Frase
      </Boton>
  </Contenedor>
  )
}
