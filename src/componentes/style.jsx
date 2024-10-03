import styled from "styled-components";
import { Button, Card } from "antd";
export const Container= styled.div`
display:flex;
width: 100%;
flex-direction: column;
background-color:${(props) => props.background || 'defaultColor'};
min-height: 100vh;
`
export const ContainerRow=styled.div`
display: flex;
width:100%;
flex-direction: row;
justify-Content:center;
`
export const ContainerColMain =styled.div`
display:flex;
width:100%;
flex-direction: column;
aling-item: center;
`
export const ContainerCard = styled(Card)`
cursor:default;
text-align:center;
margin: 20px;
background-color:${(props) => props.background || 'defaultColor'};
transition: transform 0.3s ease, box-shadow 0.3s ease;
&:hover {
    transform: scale(1.05); 
    box-shadow:  0px 4px 15px rgba(0, 0, 0.2, 0.8);
  }
`
export const ContainerOneCard = styled(Card)`
text-align:center;
margin: 10%;
background-color:${(props) => props.background || 'defaultColor'};
box-shadow: 0px 10px 30px rgba(0, 0, 0.2, 0.8);
width:50%

`
export const TitleH1Kahoo= styled.h1`
    font-family: 'Arial', sans-serif; 
    font-size: 4rem; 
    color: #A800A1; 
    text-align: center; 
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.05);
        cursor: pointer; 
    }
`
export const TitleH2= styled.h2`
    font-family: 'Arial', sans-serif;  
    text-align: center; 
`
export const ButtonNext= styled(Button)`
    width: 100%;
    font-family: 'Arial', sans-serif;
    font-size: 15px;
    font-weight: 700;
    margin-top:30px;
    color: #f9b424;
    border:2px solid #f9b424;
    border-radius: 10px;
    &:hover{
        background-color:#f9b424 !important;
        border:2px solid #f9b424 !important;
        color:black !important;
    }
`
export const ContainerP = styled.p`
font-weight: bold;
font-family: "Arial";
flex-grow:1;
margin-Button:30px;
`
export const ContainerQuestions = styled.p`
padding:20px;
margin:10px;
font-weight: 500;
font-family: "Arial";
flex-grow:1;
flex-basis: 200px;
border:2px solid #ffff8c;
border-radius: 7px;
cursor:pointer;
transition: transform 0.3s ease;
&:hover{
        transform: scale(1.05);
        background-color:#f9b424 ;
        border:2px solid #f9b424 ;
        font-weight:600;
        color:black;
    }
    ${({ disabled, selected }) =>
    disabled &&
    !selected &&
    `
    cursor: not-allowed;
    transform: none;
    &:hover {
        transform: none; 
        border:2px solid #ffff8c ;
        font-weight: 500;
        background-color:white ;
    }
  `}
  ${({ selected }) =>
    selected &&
    `
    background-color: #f9b424;
    border: 2px solid #f9b424;
    font-weight: 600;
    color: black;
    cursor: not-allowed;  /* No permitir más clics en el seleccionado */
  `}

`


