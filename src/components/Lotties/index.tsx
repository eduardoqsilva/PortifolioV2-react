import { Player } from '@lottiefiles/react-lottie-player'
import { LottieContainer } from './Lotties.styled'
import devFront from '../../assets/Lotties/devFront.json'
import devStudy from '../../assets/Lotties/devStudy.json'

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