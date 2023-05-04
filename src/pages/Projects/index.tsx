import { CardProject } from "../../components/Cards";
import { ContainerProjects, GridProjectsWrapper } from "./projects.styled";
import { TitleH1 } from "../Sobre/sobre.styled";
import { Footer } from "../../components/Footer";

import acade from '../../assets/imgs/ImgProjects/acade.jpg'
import solar from '../../assets/imgs/ImgProjects/solarCalc.jpg'
import comycly from '../../assets/imgs/ImgProjects/comicly.jpg'
import pomodoro from '../../assets/imgs/ImgProjects/pomodoro.jpg'

export function Projects() {
  return (
    <>
      <ContainerProjects>
        <GridProjectsWrapper>
          <div>
            <TitleH1>projetos</TitleH1>
          </div>
          <CardProject
            title="SolarCalc"
            img={solar}
            link={''}
          />
          <CardProject
            title="acade login"
            img={acade}
            link={''}
          />
          <CardProject
            title="pomodoro"
            img={pomodoro}
            link={''}
          />
          <CardProject
            title="comicly"
            img={comycly}
            link={''}
          />
        </GridProjectsWrapper>
      </ContainerProjects>
      <Footer />
    </>
  )
}