import { LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { colors } from "../../styles/variables";
import { FooterContainer } from "./footer.styled";

export function Footer() {
  return(
    <FooterContainer>
      <div className="card">
        <h2>Entre em contato comigo:</h2>
        <p>Fique à vontade para enviar mensagem ou acessar meu perfil no LinkedIn</p>
         <div className="buttons">
           <Link target={'_blank'} to={"https://www.linkedin.com/in/eduardoqsilva/"}>
             <button className="linkedin">
                <LinkedinLogo size={28} color={colors.white} weight={'regular'}/>
             </button>
           </Link>
           <Link target={'_blank'} to={"https://api.whatsapp.com/send?phone=5564993252497"}>
             <button className="whatsapp">
                <WhatsappLogo size={28} color={colors.white} weight={'regular'}/>
             </button>
           </Link>
         </div>
      </div>
    </FooterContainer>
  )
}