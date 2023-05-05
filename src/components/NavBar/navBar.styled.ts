import styled from "styled-components";
import { colors } from "../../styles/variables";


interface TypeNav {
  scroll: number
}
export const NavStyled = styled.nav<TypeNav>`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0 1rem  2rem;
  
  color: ${colors.white};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  ${(props) => props.scroll > 200 ? 
    `background: rgba(0,0,0,0.4);`
    : ''
  }

  @media (max-width: 800px) {
    padding-right: 2rem;
    background-color: transparent;
    & > a{
      opacity: 0;
      pointer-events: none;
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
    z-index: 50;

    background-color: ${colors.gray2};
    padding: 6rem 0 1rem 0;
  }

  & a {
    text-decoration: none;
    padding: 0.5rem;
    
    margin-right: 2rem;
    /* margin-bottom: 1rem; */
    
    position: relative;
    transition: all .5 ease-in-out;
    
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
  width: 2.8rem;
  height: 2.2rem;
  position: relative;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 99;

  @media (max-width: 800px) {
    display: flex;
  }

  & input[type='checkbox'] {
    position: absolute;
    width: 100%;
    height: 100%;
    appearance: none;
    background: transparent;
    z-index: 100;
  }

  & span {
    display: block;
    width: 100%;
    height: 5px;
    background-color: ${colors.white};
    border-radius: 4px;
    transition: all 0.2s ease-in;
  }
  /* & .trace:nth-child(3) {
    width: 70%;
  } */
  & .check:checked ~ .trace:nth-child(2) {
    transform: translateY(15px) rotate(45deg);
  }
  & .check:checked ~ .trace:nth-child(3) {
    transform: translateX(100%);
    opacity: 0;
  }
  & .check:checked ~ .trace:nth-child(4) {
    transform: translateY(-15px) rotate(-45deg);
  }
`