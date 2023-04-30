import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Default } from "../layouts/default";
import { Home } from "../pages/Home";
import { Sobre } from "../pages/Sobre";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Route>
    </Routes>
  )
}