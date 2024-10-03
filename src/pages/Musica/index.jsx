import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import opciones from "./opciones";
import { Container } from '../../componentes/style';
import CardResult from '../../componentes/CardResult';
import Card from '../../componentes/Card';

const Musica = () => {
  const [opcionesMusica, setOpcionesMusica] = useState([]);
  const [cont, setCont] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [contOk, setContOk]=useState(0);
  const navigate = useNavigate();
  const [resuls, setResults] = useState(false);
 
  useEffect(() => {
    setOpcionesMusica(opciones);
  }, []);

  return (
    <Container background="yellow">
    {resuls === false ? (
    <Card
    title={"Música"}
    opcionesCard={opcionesMusica}
    setOpcionesCard={setOpcionesMusica}
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
        <CardResult title={"Musica"} cont={cont} contOk={contOk}></CardResult>
      )}
    </Container>
  )
}
export default Musica;
