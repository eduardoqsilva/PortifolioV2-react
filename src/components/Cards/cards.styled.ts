import styled from "styled-components";
import { colors } from "../../styles/variables";



export const CardExperienceWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  
  padding: 2rem;
  background-color: ${colors.gray3};
  border-radius: 16px;

  & .description {
    font-style: normal;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 160%;
    /* or 29px */

    text-align: justify;
    letter-spacing: 0.015em;
    padding-top: 1rem;

    border-top: 1px solid ${colors.gray4};
  }
`
export const HeaderExperienceCard = styled.div`

  display: flex;
  gap: 1.5rem;
  height: 5.5625rem;
  margin-bottom: 1rem;

  & div.icon {
    width: 5.5625rem;
    height: 5.5625rem;

    background-color: ${colors.pink_dark};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
  }
  & div.header {
    & span {
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      line-height: 160%;
      /* identical to box height, or 26px */
      letter-spacing: 0.015em;

      color: #FF72B6;
    }

    & h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 160%;
      /* or 38px */

      letter-spacing: 0.015em;
      color: ${colors.white};
    }

    & p {
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      line-height: 160%;
      /* identical to box height, or 26px */

      letter-spacing: 0.015em;
      color: ${colors.gray7};
    }
  }
  @media (max-width: 530px) {
    flex-direction: column;
    height: fit-content;
  }
`

export const CardFormationWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 1.5rem;
  background-color: ${colors.gray2};
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 160%;
    /* or 38px */
    letter-spacing: 0.015em;
    color: ${colors.white};

    @media (max-width: 430px) {
      font-size: 1rem;
    }
  }

  & p {
    font-style: normal;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 160%;
    /* or 19px */
    letter-spacing: 0.015em;
  }

  & .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & span {
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 160%;
      /* or 19px */
      letter-spacing: 0.015em;
    }
    & span:nth-child(1) {
      color: ${colors.pink_dark};
    }
    & span:nth-child(2) {
      color: ${colors.blu_light};
    }
    & span:nth-child(3) {
      color: ${colors.blu_light};

      &::after {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: ${colors.blu_light};
        border-radius: 50%;
        margin-left: 10px;
      }
    }
  }
`

interface CardProjectsWrapperType {
  isHover: boolean
}
export const CardProjectsWrapper = styled.div<CardProjectsWrapperType>`
  width: 19.375rem;
  height: 26.25rem;
  border-radius: 16px;
  position: relative;
  border: 1px solid transparent;
  transition: all 0.1s ease-in;
  
  -webkit-box-shadow: 0px 0px 12px 0px ${colors.gray2};
  -moz-box-shadow: 0px 0px 12px 0px ${colors.gray2};
  box-shadow: 0px 0px 12px 0px ${colors.gray2};

  ${(props) => props.isHover ? 
      `border: 1px solid ${colors.pink_dark};`
      : ``
  }

  & .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    display: block;
    /* ${(props) => props.isHover ? 
      `filter: grayscale(0) brightness(1);`
      : `filter: grayscale(1) brightness(0.6);`
    } */
    transition: all 0.1s ease-in;
    position: relative;
  }

  & .wrapper {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    padding: 1.5rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    gap: 1rem;
    z-index: 1;

    & button {
      background-color: ${colors.pink_dark};
      padding: 0 1rem;
      border: none;
      border-radius: 4px;
      transition: all 0.1s ease-in;

      &:hover {
        transform: scale(1.05);
      }
      &:active {
        transform: scale(0.95);
      }
    }
    & h2 {
      font-size: 1.3rem;
      font-weight: 600;
      color: ${colors.white};
      text-transform: capitalize;
    }
  }
  ::after {
      content: '';
      width: 100%;
      height: 100%;
      background: rgb(0,0,0,0.1);
      background: linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 17%, rgba(0,0,0,0) 100%);
      border-radius: 16px;
      
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }
`