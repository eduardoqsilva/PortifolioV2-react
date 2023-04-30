import { Code } from "@phosphor-icons/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { colors } from "../../styles/variables";
import { Menu, NavItems, NavStyled } from "./navBar.styled";


interface NavType {
  Items: string[]
  Links: string[]
}

export function NavBar({Items, Links}:NavType) {

  const [show, setShow] = useState(false)


  function handleClickMenu(e:React.ChangeEvent<HTMLInputElement>) {
    const check = e.currentTarget.checked
    setShow(check)
  }

  return (
    <NavStyled>
      <Code weight="bold" size={52} color={colors.white}/>
        <Menu>
          <input type="checkbox" className="check" checked={show} onChange={handleClickMenu}/>
          <span className="trace"></span>
          <span className="trace"></span>
          <span className="trace"></span>
        </Menu>
      <NavItems show={show} >
        {Items.map((i,k) => {
          return(
            <NavLink 
              key={k} 
              to={Links[k]}
            >
              <li>{i}</li>
            </NavLink>
          )
        })}
      </NavItems>
    </NavStyled>
  )
}