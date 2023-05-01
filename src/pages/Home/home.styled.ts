import styled, { keyframes } from "styled-components";
import { colors, fonts } from "../../styles/variables";


const rotate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(365deg);
  }
`

export const ContantContainer = styled.main`
  width: 100%;
  height: 100vh;
  padding: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const TextWrapper = styled.div`
  font-family: ${fonts.secundary};
  color: ${colors.white};
  
  & h1 {
    font-size: 6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; 
    letter-spacing: 0.085em; 
  }

  & h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 160%;
    letter-spacing: 0.497em;
    padding-left: 0.3rem;
  }
`
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  margin-top: 3rem;
`

export const OrnamentsCont = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  /* background-color: red; */

  & div {
    position: absolute;
    animation: ${rotate} 10s infinite linear;
  }

  & div:nth-child(1) {
    width: 90vh;
    height: 90vh;
    background: ${colors.pink_light};
    background: linear-gradient(324deg, ${colors.pink_light} 0%, ${colors.blu_dark} 100%);
    border-radius: 50%;
    filter: blur(150px);

    top: -10%;
    left: -10%;
  }
  & div:nth-child(2) {
    width: 70vh;
    height: 70vh;
    background: ${colors.pink_light};
    background: linear-gradient(324deg, ${colors.pink_light} 0%, ${colors.blu_dark} 100%);
    border-radius: 50%;
    filter: blur(150px);

    bottom: -10%;
    left: -5%;
  }
  & div:nth-child(3) {
    width: 100vh;
    height: 100vh;
    background: ${colors.pink_light};
    background: linear-gradient(324deg, ${colors.pink_light} 0%, ${colors.blu_dark} 100%);
    border-radius: 50%;
    filter: blur(150px);

    left: calc(50% - 50vh);
    top: calc(50% - 50vh);
  }
  & div:nth-child(4) {
    width: 70vh;
    height: 70vh;
    background: ${colors.pink_dark};
    background: linear-gradient(324deg, ${colors.pink_dark} 0%, ${colors.blu_light} 100%);
    border-radius: 50%;
    filter: blur(150px);

    bottom: -10%;
    right: 10%;
  }
  & div:nth-child(5) {
    width: 70vh;
    height: 70vh;
    background: ${colors.pink_dark};
    background: linear-gradient(324deg, ${colors.pink_dark} 0%, ${colors.blu_light} 100%);
    border-radius: 50%;
    filter: blur(150px);

    top: 50%;
    right: -10%;

    transform: translateY(-50%);
  }
  & div:nth-child(6) {
    width: 70vh;
    height: 70vh;
    background: ${colors.pink_dark};
    background: linear-gradient(324deg, ${colors.pink_dark} 0%, ${colors.blu_light} 100%);
    border-radius: 50%;
    filter: blur(150px);

    top: -10%;
    right: -1%;
  }
`