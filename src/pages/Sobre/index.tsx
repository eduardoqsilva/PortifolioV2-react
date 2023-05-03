import { CardExperience, CardFormation } from "../../components/Cards";
import { Footer } from "../../components/Footer";
import { DevFrontAnimate, DevStudy } from "../../components/Lotties";
import { ContainerExperience, ContainerFormations, ContainerSobre, TitleH1, WrapperExperience, WrapperTextSobre } from "./sobre.styled";

export function Sobre() {
  return (
    <>
      <ContainerSobre>
        <DevFrontAnimate />
        <WrapperTextSobre>
          <TitleH1>sobre mim</TitleH1>
          <p>Olá! Meu nome é Eduardo Queiroz e sou um desenvolvedor front-end com experiência em React, TypeScript e styled-components. Sou apaixonado por criar interfaces de usuário incríveis e funcionais que ajudam as pessoas a resolver problemas. Meus projetos mais recentes incluem um app web de calculo de energia solar e um pomodoro. Eu amo trabalhar em equipe e estou sempre procurando aprender coisas novas. Se você está procurando um desenvolvedor front-end que possa ajudá-lo a criar projetos incríveis, entre em contato comigo!</p>
        </WrapperTextSobre>
      </ContainerSobre>
      <ContainerExperience>
        <WrapperExperience>
          <TitleH1>Experiência</TitleH1>
          <div className="cards">
            <CardExperience 
              date={"01/12/2022 - atualmente"} 
              title={"Desenvolvedor Autônomo"} 
              funtion={"Desenvolvedor React Js"}
              description={"Desenvolvedor autônomo com experiência em React, TypeScript e Styled-components. Trabalho com clientes de diferentes setores e ajudo-os a criar soluções personalizadas para suas necessidades. Eu amo trabalhar em equipe e estou sempre procurando aprender coisas novas. Se você está procurando um desenvolvedor autônomo que possa ajudá-lo a criar projetos incríveis, entre em contato comigo!"} 
            />
          </div>
        </WrapperExperience>
      </ContainerExperience>
      <ContainerFormations>
          <TitleH1>Formações</TitleH1>
          <div className="wrapper">
            <DevStudy/>
            <div className="cards">
              <CardFormation
                date={"02/2020 - 01/2023"}
                type={"Graduação"}
                finish={"Concluída"}
                title={"Centro Universitário Leonardo da Vinci"}
                name={"Análise e desenvolvimento de sistemas"}
              />
              <CardFormation
                date={"02/2020 - 01/2023"}
                type={"Graduação"}
                finish={"Concluída"}
                title={"Centro Universitário Leonardo da Vinci"}
                name={"Análise e desenvolvimento de sistemas"}
              />
              <CardFormation
                date={"02/2020 - 01/2023"}
                type={"Graduação"}
                finish={"Concluída"}
                title={"Centro Universitário Leonardo da Vinci"}
                name={"Análise e desenvolvimento de sistemas"}
              />
            </div>
          </div>
      </ContainerFormations>
      <Footer />
    </>
  )
}