import styled from "styled-components";
import { colors } from "../../styles/variables";




export const TitleH1 = styled.h1`
  width: fit-content;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 160%;
  /* or 102px */
  letter-spacing: 0.015em;

  position: relative;

  &::after {
    content: '';
    display: block;
    width: 50%;
    height: 7px;
    background-color: ${colors.pink_dark};
    
    position: absolute;
    bottom: 0;
    left: 0;
  }
`

export const ContainerSobre = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 100px;
  padding: 5rem 1.5rem 1.5rem 1.5rem;

  @media (max-width: 1100px) {
    gap: 2rem;
  }
`
export const WrapperTextSobre = styled.article`
  max-width: 500px;
  width: 100%;

  & p {
    margin-top: 3rem;
    
    font-style: normal;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 160%;
    /* or 38px */

    text-align: justify;
    letter-spacing: 0.015em;
  }
`

export const ContainerExperience = styled.div`
  width: 100vw;
  min-height: 100vh;
  /* height: 100vh; */

  display: flex;
  justify-content: center;
  align-items: center;
`
export const WrapperExperience = styled.div`
  width: 100%;
  min-height: calc(100vh - 30%);
  background-color: ${colors.gray2};
  padding: 1.5rem;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 56px 1fr;
  justify-items: center;
  align-items: center;
  gap: 1.5rem;

  & .cards {
    height: fit-content;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ContainerFormations = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8rem;

  @media (max-width: 800px) {
    gap: 1.5rem;
  }

  & div.cards {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & div.wrapper {
    display: flex;
    gap: 100px;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 800px) {
      gap: 1rem;
    }

    & > :nth-child(2) {
      order: -1;

      @media (max-width: 800px) {
        order: 0;
      }
    }
  }
`