import { LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";
import { colors } from "../../styles/variables";
import { FooterContainer } from "./footer.styled";

export function Footer() {
  return(
    <FooterContainer>
      <div className="card">
        <h2>Entre em contato comigo:</h2>
        <p>Fique à vontade para enviar mensagem ou acessar meu perfil no LinkedIn</p>
         <div className="buttons">
           <button className="linkedin">
              <LinkedinLogo size={28} color={colors.white} weight={'regular'}/>
           </button>
           <button className="whatsapp">
              <WhatsappLogo size={28} color={colors.white} weight={'regular'}/>
           </button>
         </div>
      </div>
    </FooterContainer>
  )
}