import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { FraseScreen } from "./components/FraseScreen";

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
  :hover {
    cursor: pointer;
    background-size:400;
  }
`;

export const App = () => {
  //definir el state
  const [frase, guardarFrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch(
      "http://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );

    const frase = await api.json();

    //pasa la frase al state
    guardarFrase(frase[0]);
  };

  //cargar una frase
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Contenedor>
      <FraseScreen frase={frase} />
      <Boton onClick={consultarAPI}>Obtener Frase</Boton>
    </Contenedor>
  );
};
