import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Default } from "../layouts/default";
import { Contact } from "../pages/Contact";
import { Error404 } from "../pages/Error";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Sobre } from "../pages/Sobre";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  )
}