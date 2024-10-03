import React from 'react'
import {
    ButtonNext,
    ContainerColMain,
    ContainerOneCard,
    ContainerP,
    ContainerQuestions,
    ContainerRow,
    TitleH2,
  } from "./style";
const Card = ({
  title,
  opcionesCard,
  setOpcionesCard,
  cont,
  setCont,
  disabled,
  setDisabled,
  selectedOption,
  setSelectedOption,
  contOk,
  setContOk,
  navigate,
  resuls,
  setResults
}) => {
    const handleNext = (e) => {
        if (cont >= opcionesCard.length - 1) {
          setResults(true);
          
        } else {
          setCont(cont + 1);
        }
        setDisabled(false);
        setSelectedOption("");
      };
    
      const handleClick = (questions, answer) => {
        if (questions === answer) {
          setContOk(contOk + 1);
        }
        setSelectedOption(questions);
        setDisabled(true);
      };
      console.log("aciertos", contOk);
     
  return (
    <ContainerRow>
          <ContainerOneCard background="white">
            <ContainerRow>
              <ContainerP style={{ fontWeight: "bold", fontFamily: "Arial" }}>
                {title}
              </ContainerP>
              <ContainerP style={{ fontWeight: "bold", fontFamily: "Arial" }}>
                {cont + 1}/10
              </ContainerP>
            </ContainerRow>
            <ContainerRow>
              {opcionesCard.length > 0 && (
                <ContainerColMain>
                  <TitleH2>{opcionesCard[cont].pregunta}</TitleH2>
                  <ContainerRow>
                    <ContainerQuestions
                      selected={selectedOption === opcionesCard[cont].a}
                      disabled={disabled === true}
                      onClick={(e) =>
                        disabled === false &&
                        handleClick(
                          opcionesCard[cont].a,
                          opcionesCard[cont].respuesta
                        )
                      }
                    >
                      {opcionesCard[cont].a}
                    </ContainerQuestions>
                    <ContainerQuestions
                      selected={selectedOption === opcionesCard[cont].b}
                      disabled={disabled === true}
                      onClick={(e) =>
                        disabled === false &&
                        handleClick(
                          opcionesCard[cont].b,
                          opcionesCard[cont].respuesta
                        )
                      }
                    >
                      {opcionesCard[cont].b}
                    </ContainerQuestions>
                  </ContainerRow>
                  <ContainerRow>
                    <ContainerQuestions
                      selected={selectedOption === opcionesCard[cont].c}
                      disabled={disabled === true}
                      onClick={(e) =>
                        disabled === false &&
                        handleClick(
                          opcionesCard[cont].c,
                          opcionesCard[cont].respuesta
                        )
                      }
                    >
                      {opcionesCard[cont].c}
                    </ContainerQuestions>
                    <ContainerQuestions
                      selected={selectedOption === opcionesCard[cont].d}
                      disabled={disabled === true}
                      onClick={(e) =>
                        disabled === false &&
                        handleClick(
                          opcionesCard[cont].d,
                          opcionesCard[cont].respuesta
                        )
                      }
                    >
                      {opcionesCard[cont].d}
                    </ContainerQuestions>
                  </ContainerRow>
                  <ContainerRow>
                    <ButtonNext size={"large"} onClick={(e) => handleNext(e)}>
                      Siguiente
                    </ButtonNext>
                  </ContainerRow>
                </ContainerColMain>
              )}
            </ContainerRow>
          </ContainerOneCard>
        </ContainerRow>
  )
}

export default Card;