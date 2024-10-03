import React, { useEffect, useState } from 'react'
import opciones from './opciones';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../componentes/style';
import Card from '../../componentes/Card';
import CardResult from '../../componentes/CardResult';

const Ciencias = () => {
  const [opcionesCiencias, setOpcionesCiencias] = useState([]);
  const [cont, setCont] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [contOk, setContOk]=useState(0);
  const navigate = useNavigate();
  const [resuls, setResults] = useState(false);
  
  useEffect(() => {
    setOpcionesCiencias(opciones);
  }, []);
  return (
    <Container background="green">
    {resuls === false ? (
    <Card
    title={"Ciencias"}
    opcionesCard={opcionesCiencias}
    setOpcionesCard={setOpcionesCiencias}
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
        <CardResult title={"Ciencias"} cont={cont} contOk={contOk}></CardResult>
      )}
    </Container>
  )
}

export default Ciencias;
