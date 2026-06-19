import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import Inicio from "../pages/Inicio.jsx";
import Nosotros from "../pages/Nosotros.jsx";
import Servicios from "../pages/Servicios.jsx";
import Soluciones from "../pages/Soluciones.jsx";
import Proyectos from "../pages/Proyectos.jsx";
import Industrias from "../pages/Industrias.jsx";
import Blog from "../pages/Blog.jsx";
import Contacto from "../pages/Contacto.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/soluciones" element={<Soluciones />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/industrias" element={<Industrias />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default Router;