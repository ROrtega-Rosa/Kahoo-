import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
 
} from "../../componentes/style";
import CardsMain from "./CardsMain";


const Main = () => {
  const navigate = useNavigate();

  return (
    <Container background="#e9e9af">
      <CardsMain
      navigate={navigate}
      ></CardsMain>
    </Container>
  );
};

export default Main;
