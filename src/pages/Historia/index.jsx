import React, { useEffect, useState } from "react";
import opciones from "./opciones";
import {
  Container,  
} from "../../componentes/style";
import { useNavigate } from "react-router-dom";
import Card from "../../componentes/Card";
import CardResult from "../../componentes/CardResult";


const Historia = () => {
  const [opcionesHistoria, setOpcionesHistoria] = useState([]);
  const [cont, setCont] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [contOk, setContOk]=useState(0);
  const navigate = useNavigate();
  const [resuls, setResults] = useState(false);
 
  useEffect(() => {
    setOpcionesHistoria(opciones);
  }, []);

  return (
    <Container background="royalblue">
    {resuls === false ? (
    <Card
    title={"Historia"}
    opcionesCard={opcionesHistoria}
    setOpcionesCard={setOpcionesHistoria}
    cont={cont}
    setCont={setCont}
    disabled={disabled}
    setDisabled={setDisabled}
    selectedOption={selectedOption}
    setSelectedOption={setSelectedOption}
    contOk={contOk}
    setContOk={setContOk}
    navigate={navigate} 
    resuls={resuls}
    setResults={setResults}
    ></Card>
    ): (
        <CardResult title={"Historia"} cont={cont} contOk={contOk}></CardResult>
      )}
    </Container>
  );
};
export default Historia;
