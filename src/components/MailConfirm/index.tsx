import { useEffect, useState } from "react";
import { ErrorAnimate, MailSend } from "../Lotties";
import { MailConfirmWrapper, WrapperAnimation } from "./mail.styled";

interface MailConfirm {
  show: boolean
  error: boolean
}
export function MailConfirm({ show, error }:MailConfirm) {

  return(
    <MailConfirmWrapper show={show}>
      <WrapperAnimation>
        {error ? <ErrorAnimate/> : <MailSend />}
      </WrapperAnimation>
    </MailConfirmWrapper>
  )
}