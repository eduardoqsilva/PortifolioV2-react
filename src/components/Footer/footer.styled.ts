import styled from "styled-components";
import { colors } from "../../styles/variables";

export const FooterContainer = styled.footer`
  width: 100vw;
  height: 15rem;
  background-color: ${colors.gray2};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 100px;

  & div.card {
    width: 60%;
    min-width: 350px;
    height: fit-content;
    background-color: ${colors.gray3};
    padding: 1.5rem;
    text-align: center;
    border-radius: 8px;
    margin-top: -80px;

    display: flex;
    flex-direction: column;
    gap: 1rem;


    & .buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 1rem;

      & button {
        padding: 0.28rem 3rem;
        border: none;
        border-radius: 4px;
        transition: all 0.2s ease-in;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          transform: scale(1.05);
        }
        &:active {
          transform: scale(0.95);
        }
      }

      & .linkedin {
        background-color: ${colors.blu_dark};
      }

      & .whatsapp {
        background-color: ${colors.pink_dark};
      }
    }
  }
`