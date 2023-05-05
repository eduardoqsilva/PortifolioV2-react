import styled from "styled-components";
import { colors } from "../../styles/variables";

interface TypeMail {
  show: boolean
}
export const MailConfirmWrapper = styled.div<TypeMail>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0,0,0,0.8);
  display: ${(props) => props.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
`

export const WrapperAnimation = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  background-color: ${colors.gray2};
  border-radius: 16px;
  padding: 1rem;
`