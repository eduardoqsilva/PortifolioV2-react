import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./variables";

export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${colors.gray1};
    font-family: ${fonts.default};
    color: ${colors.gray7};
    line-height: 160%;
    overflow-x: hidden;
    max-width: 100vh;
  }
`