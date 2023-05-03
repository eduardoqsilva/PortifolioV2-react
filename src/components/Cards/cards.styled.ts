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
  max-width: fit-content;
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