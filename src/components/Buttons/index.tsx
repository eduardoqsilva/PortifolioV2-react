import { IconContext, IconProps } from "@phosphor-icons/react";
import { ButtonHomeStyled } from "./buttons.styled";
import { colors } from "../../styles/variables";


interface ButtonHomeType {
  text: string
  icon: React.ReactElement<IconProps>
}

export function ButtonHome({text, icon}:ButtonHomeType) {
  return (
    <ButtonHomeStyled>
      {text}
      <IconContext.Provider
        value={{
          size: 24,
          color: colors.white,
          weight: "bold"
        }}
      >
        {icon}
      </IconContext.Provider>
    </ButtonHomeStyled>
  )
}