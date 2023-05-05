import styled from "styled-components";
import { colors } from "../../styles/variables";
import { TitleH1 } from "../Sobre/sobre.styled";

export const ContainerContact = styled.main`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 1.5rem 1.5rem 1.5rem;
`
export const FormStyled = styled.form`
  width: 100%;
  max-width: 450px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & .input {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;
    
    width: 100%;
    height: 57px;


    background-color: ${colors.gray2};
    border-radius: 8px;
    border: 1px solid transparent;

    &:focus-within {
      border: 1px solid ${colors.blu_light};
    }

    & input {
      height: 100%;
      width: 100%;
      
      background-color: transparent;
      border: none;
      outline: none;
      caret-color: ${colors.white};

      font-size: 1rem;
      font-weight: 500;
      color: ${colors.white};

      &::placeholder {
        color: ${colors.gray4};
      }
    }
  }
  & > textarea {
    width: 100%;
    
    border: 1px solid transparent;
    background-color: ${colors.gray2};
    border-radius: 8px;
    padding: 1rem;
    resize: none;

    font-size: 1rem;
    color: ${colors.white};
    outline: none;

    &::placeholder {
      color: ${colors.gray4};
    }
    &:focus {
      border: 1px solid ${colors.blu_light};
    }
  }

  & button {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    background-color: ${colors.pink_dark};
    color: ${colors.white};
    transition: all 0.1s ease-in;

    &:active {
      transform: scale(0.95);
    }
  }
  & ${TitleH1} {
    margin-bottom: 2rem;
  }
`
