import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ContainerColMain,
  ContainerOneCard,
  ContainerRow,
  TitleH2,
  ContainerQuestions,
  ButtonNext
} from "./style";

const CardResult = ({ title, cont, contOk }) => {
  const navigate = useNavigate()

  const handleInit=(e)=>{
    navigate("/")
  }
  return (
    <>
      <ContainerRow>
        <ContainerOneCard background="white">
          <ContainerRow>
            <ContainerColMain>
              <TitleH2>{title}</TitleH2>
              <ContainerRow>
                <ContainerQuestions>Total de preguntas: {cont+1}</ContainerQuestions>
                <ContainerQuestions>Numero de aciertos: {contOk}</ContainerQuestions>
              </ContainerRow>
              <ButtonNext size={"large"} onClick={(e)=>handleInit(e)} >
                Volver a inicio
              </ButtonNext>
            </ContainerColMain>
          </ContainerRow>
        </ContainerOneCard>
      </ContainerRow>
    </>
  );
};

export default CardResult;
