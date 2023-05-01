import { ArrowCircleRight, FileArrowDown } from "@phosphor-icons/react";
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
            <ButtonHome
              text="Conhecer Trabalhos"
              icon={<ArrowCircleRight />}
            />
            <ButtonHome
              text="Download CV"
              icon={<FileArrowDown />}
            />
          </ButtonWrapper>
        </TextWrapper>
        <SocialHome />
      </ContantContainer>
    </>
  )
}