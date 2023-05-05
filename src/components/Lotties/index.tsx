import { Player } from '@lottiefiles/react-lottie-player'
import { LottieContainer, LottieContainerMail } from './Lotties.styled'
import devFront from '../../assets/Lotties/devFront.json'
import devStudy from '../../assets/Lotties/devStudy.json'
import mail from '../../assets/Lotties/email.json'
import error from '../../assets/Lotties/error.json'
import error404 from '../../assets/Lotties/404Error.json'

export const DevFrontAnimate = () => {

  return (
    <LottieContainer>
      <Player src={devFront} autoplay loop />
    </LottieContainer>
  )
}

export const DevStudy = () => {

  return (
    <LottieContainer>
      <Player src={devStudy} autoplay loop />
    </LottieContainer>
  )
}

interface MailSend {
  play: boolean
}
export const MailSend = () => {

  return (
    <LottieContainerMail>
      <Player src={mail} autoplay keepLastFrame/> 
    </LottieContainerMail>
  )
}

export const ErrorAnimate = () => {
  return (
    <LottieContainerMail>
      <Player src={error} autoplay keepLastFrame/> 
    </LottieContainerMail>
  )
}

export const Error404Animate = () => {
  return (
    <LottieContainerMail>
      <Player src={error404} autoplay loop/> 
    </LottieContainerMail>
  )
}