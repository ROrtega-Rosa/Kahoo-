import React from "react";
import {
  ContainerCard,
  ContainerColMain,
  ContainerRow,
  TitleH1Kahoo,
} from "../../componentes/style";
const CardsMain = ({ navigate }) => {
  const handleNavigate = (e, value) => {
    switch (value) {
      case "historia":
        navigate("/historia");
        break;
      case "ciencias":
        navigate("/ciencias");
        break;
      case "tecnologia":
        navigate("/tecnologia")
        break;
      case "musica":
        navigate("/musica")
        break;
      default:
        console.log("ese valor no existe");
    }
  };
  return (
    <>
      <ContainerRow>
        <TitleH1Kahoo>Kahoot!</TitleH1Kahoo>
      </ContainerRow>
      <ContainerRow>
        <ContainerColMain>
          <ContainerCard
            title={
              <span
                style={{
                  color: "white",
                  fontSize: "30px",
                  fontFamily: "Arial",
                  textAlign: "center",
                }}
              >
                Historia
              </span>
            }
            bordered={false}
            background="royalblue"
          >
            <img
              onClick={(e) => handleNavigate(e, "historia")}
              src="/img/historia.png"
              alt="Historia"
              width="30%"
              style={{ cursor: "pointer" }}
            />
          </ContainerCard>
        </ContainerColMain>
        <ContainerColMain>
          <ContainerCard
            title={
              <span
                style={{
                  color: "white",
                  fontSize: "30px",
                  fontFamily: "Arial",
                  textAlign: "center",
                }}
              >
                Ciencias
              </span>
            }
            bordered={false}
            background="green"
          >
            <img
              src="/img/ciencia.webp"
              alt="Ciencias"
              width="30%"
              style={{ cursor: "pointer" }}
              onClick={(e) => handleNavigate(e, "ciencias")}
            />
          </ContainerCard>
        </ContainerColMain>
      </ContainerRow>
      <ContainerRow>
        <ContainerColMain>
          <ContainerCard
            title={
              <span
                style={{
                  color: "white",
                  fontSize: "30px",
                  fontFamily: "Arial",
                  textAlign: "center",
                }}
              >
                Tecnología
              </span>
            }
            bordered={false}
            background="red"
          >
            <img
              src="/img/tecnologia.png"
              alt="Tecnología"
              width="30%"
              style={{ cursor: "pointer" }}
              onClick={(e) => handleNavigate(e, "tecnologia")}
            />
          </ContainerCard>
        </ContainerColMain>
        <ContainerColMain>
          <ContainerCard
            title={
              <span
                style={{
                  color: "white",
                  fontSize: "30px",
                  fontFamily: "Arial",
                  textAlign: "center",
                }}
              >
                Música
              </span>
            }
            bordered={false}
            background="yellow"
          >
            <img
              src="/img/musica.png"
              alt="Musica"
              width="30%"
              style={{ cursor: "pointer" }}
              onClick={(e) => handleNavigate(e, "musica")}
            />
          </ContainerCard>
        </ContainerColMain>
      </ContainerRow>
    </>
  );
};
export default CardsMain;
