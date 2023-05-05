import { ArrowCircleRight, FileArrowDown } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { ButtonHome } from "../../components/Buttons";
import { SocialHome } from "../../components/Social";
import { ButtonWrapper, ContantContainer, OrnamentsCont, TextWrapper } from "./home.styled";

export function Home() {
  return (
    <>
      <OrnamentsCont>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </OrnamentsCont>
      <ContantContainer>
        <TextWrapper>
          <h1>Eduardo Queiroz</h1>
          <h2>Desenvolvedor Front-end</h2>
          <ButtonWrapper>
            <Link to={'/projetos'}>
              <ButtonHome
                text="Conhecer Trabalhos"
                icon={<ArrowCircleRight />}
              />
            </Link>
            <Link 
              to={'https://drive.google.com/file/d/1ADn2qkBIqrclY3VYz__cbouVSO5OKf_9/view?usp=share_link'} 
              target={'_blank'} 
            >
              <ButtonHome
                text="Download CV"
                icon={<FileArrowDown />}
              />
            </Link>
          </ButtonWrapper>
        </TextWrapper>
        <SocialHome />
      </ContantContainer>
    </>
  )
}