import { GithubLogo, IconContext, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { colors } from "../../styles/variables";
import { SocialHomeWrapper } from "./social.styled";

export function SocialHome() {
  return (
    <SocialHomeWrapper>
      <IconContext.Provider
        value={{
          size: 50,
          color: colors.white,
          weight: 'regular'
        }}
      >
        <Link to={'/'}>
          <LinkedinLogo />
        </Link>
        <Link to={'/'}>
          <GithubLogo />
        </Link>
        <Link to={'/'}>
          <WhatsappLogo />
        </Link>
      </IconContext.Provider>
    </SocialHomeWrapper>
  )
}