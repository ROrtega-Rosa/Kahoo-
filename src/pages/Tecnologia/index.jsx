import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import opciones from "./opciones";
import CardResult from '../../componentes/CardResult';
import { Container } from '../../componentes/style';
import Card from '../../componentes/Card';

 const Tecnologia = () => {
  const [opcionesTecnologia, setOpcionesTecnologia] = useState([]);
  const [cont, setCont] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [contOk, setContOk]=useState(0);
  const navigate = useNavigate();
  const [resuls, setResults] = useState(false);
 
  useEffect(() => {
    setOpcionesTecnologia(opciones);
  }, []);

  return (
    <Container background="red">
    {resuls === false ? (
    <Card
    title={"Tecnología"}
    opcionesCard={opcionesTecnologia}
    setOpcionesCard={setOpcionesTecnologia}
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
        <CardResult title={"Tecnología"} cont={cont} contOk={contOk}></CardResult>
      )}
    </Container>
  )
}
export default Tecnologia;