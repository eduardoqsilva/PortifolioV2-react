import styled from "styled-components";
import { colors, fonts } from "../../styles/variables";

export const ButtonHomeStyled = styled.button`
  width: 100%;
  max-width: 270px;
  height: 57px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background: transparent;
  border: 3px solid ${colors.white};
  
  font-family: ${fonts.default};
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 160%;
  letter-spacing: 0.13em;
  color: ${colors.white};
  
  transition: all 0.2s ease-in;
  
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`