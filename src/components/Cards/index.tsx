import { BracketsCurly } from "@phosphor-icons/react";
import { colors } from "../../styles/variables";
import { CardExperienceWrapper, CardFormationWrapper, HeaderExperienceCard } from "./cards.styled";


interface ExperienceType {
  date: string
  title: string
  funtion: string
  description: string
}

export function CardExperience({date, description, funtion, title}:ExperienceType) {
  return (
    <CardExperienceWrapper>
      <HeaderExperienceCard>
        <div className="icon">
          <BracketsCurly size={35} color={colors.white} weight={'bold'}/>
        </div>
        <div className="header">
          <span>{date}</span>
          <h2>{title}</h2>
          <p>{funtion}</p>
        </div>
      </HeaderExperienceCard>
      <p className="description">
        {description}
      </p>
    </CardExperienceWrapper>
  )
}

interface CardFormationType {
  date: string
  type: string
  finish: string
  title: string
  name: string
}
export function CardFormation({date, finish, name, title, type}:CardFormationType) {
  return (
    <CardFormationWrapper>
      <div className="header">
        <span>{date}</span>
        <span>{type}</span>
        <span>{finish}</span>
      </div>
      <h2>{title}</h2>
      <p>{name}</p>
    </CardFormationWrapper>
  )
}