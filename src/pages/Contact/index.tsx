import { FormEvent, useEffect, useState } from "react";
import { ContainerContact, FormStyled } from "./contact.styled";
import emailjs from '@emailjs/browser'
import { MailConfirm } from "../../components/MailConfirm";
import { At, User } from "@phosphor-icons/react";
import { colors } from "../../styles/variables";
import { TitleH1 } from "../Sobre/sobre.styled";
import { Footer } from "../../components/Footer";

const service = import.meta.env.VITE_SERVICE_MAIL
const template = import.meta.env.VITE_TEMPLATE_MAIL
const key = import.meta.env.VITE_MAIL_KEY

export function Contact() {

  const [show, setShow] = useState(false)
  const [isError, setIsError] = useState(true)
  const [data, setData] = useState({
    name: '',
    email: '',
    message: ''
  })

  function handleSend(e:FormEvent) {
    e.preventDefault()

    const templateParams = {
      from_name: data.name.trim(),
      message: data.message.trim(),
      email: data.email.trim()
    }

    emailjs.send(service, template, templateParams, key)
    .then((res) => {
      setIsError(false)
      setShow(true)
    }).catch((err) => {
      setIsError(true)
      setShow(true)
      console.error(err)
    })

    setData({
      name: '',
      email: '',
      message: ''
    })
  }

  useEffect(() => {
    if(show && !isError) {
      setTimeout(() => {
        setShow(false)
      }, 7000)
    }else {
      setTimeout(() => {
        setShow(false)
      }, 3000)
    }
  },[show])

  return (
    <>
      <MailConfirm show={show} error={isError}/>
      <ContainerContact>
        <FormStyled onSubmit={handleSend}>
          <TitleH1>Contato</TitleH1>
          <div className="input">
            <User size={28} color={colors.pink_dark}/>
            <input
              type="text"
              placeholder="Nome"
              onChange={(e) => setData({
                ...data,
                name: e.currentTarget.value
              })}
              value={data.name}
              required
            />
          </div>
          <div className="input">
            <At size={28} color={colors.pink_dark}/>
            <input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setData({
                ...data,
                email: e.currentTarget.value
              })}
              value={data.email}
              required
            />
          </div>
          <textarea name="message"
            cols={30}
            rows={10}
            placeholder={'Sua mensagem aqui...'}
            onChange={(e) => setData({
              ...data,
              message: e.currentTarget.value
            })}
            value={data.message}
            required
          />
          <button>Enviar</button>
        </FormStyled>
      </ContainerContact>
      <Footer />
    </>
  )
}