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
        <Link target={'_blank'} to={'https://www.linkedin.com/in/eduardoqsilva/'}>
          <LinkedinLogo />
        </Link>
        <Link target={'_blank'} to={'https://github.com/eduardoqsilva'}>
          <GithubLogo />
        </Link>
        <Link target={'_blank'} to={"https://api.whatsapp.com/send?phone=5564993252497"}>
          <WhatsappLogo />
        </Link>
      </IconContext.Provider>
    </SocialHomeWrapper>
  )
}