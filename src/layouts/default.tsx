import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export function Default() {
  return (
    <>
      <NavBar 
        Items={['Home', 'Sobre', 'Projetos', 'Contato']}
        Links={['/','/sobre','/projetos','/contato']}        
      />
      <Outlet />
    </>
  )
}