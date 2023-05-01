import styled from "styled-components";
import { colors } from "../../styles/variables";

export const NavStyled = styled.nav`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.375rem 0 0 2rem;
  
  color: ${colors.white};

  position: fixed;
  top: 0;
  left: 0;

  @media (max-width: 800px) {
    padding-right: 2rem;
    & svg {
      opacity: 0;
    }
  }
`

interface NavItems {
  show: boolean
}

export const NavItems = styled.ul<NavItems>`
  display: flex;

  @media (max-width: 800px) {
    width: 100vw;
    height: 100vh;
    display: ${(props) => props.show ? 'block' : 'none'};
    position: absolute;
    right: 0;
    top: 0;
    z-index: 8;

    background-color: ${colors.gray2};
    padding: 6rem 0 1rem 0;
  }

  & a {
    text-decoration: none;
    padding: 0.5rem;
    margin-right: 2rem;
    position: relative;
    transition: all .5 ease-in-out;
    margin-bottom: 1rem;
    
    @media (max-width: 800px) {
      background-color: ${colors.gray3};
      display: block;
      padding: 1rem;
      text-align: center;
      width: 100%;
    }

    &::after {
      content: '';
      height: 5px;
      width: calc(100% - 1rem);
      background-color: transparent;
      border-radius: 2px;
      
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);

      @media (max-width: 800px) {
        width: 100%;
        border-radius: 0;
      }
    }

    &.active::after {
      background-color: ${colors.blu_light};
    }

    &:hover:not(.active)::after {
      background-color: ${colors.pink_dark};
    }
  }

  & li {
    list-style: none;
    
    font-size: 1.3rem;
    color: ${colors.white};
    font-weight: 500;
  }
`


export const Menu = styled.div`
  width: 3rem;
  height: 2.5rem;
  position: relative;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 9;

  @media (max-width: 800px) {
    display: flex;
  }

  & input[type='checkbox'] {
    position: absolute;
    width: 100%;
    height: 100%;
    appearance: none;
    background: transparent;
    z-index: 10;
  }

  & span {
    display: block;
    width: 100%;
    height: 7px;
    background-color: ${colors.white};
    border-radius: 4px;
    transition: all 0.2s ease-in;
  }

  & .check:checked ~ .trace:nth-child(2) {
    transform: translateY(17px) rotate(45deg);
  }
  & .check:checked ~ .trace:nth-child(3) {
    transform: translateX(100%);
    opacity: 0;
  }
  & .check:checked ~ .trace:nth-child(4) {
    transform: translateY(-17px) rotate(-45deg);
  }
`