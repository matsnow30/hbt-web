import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

import Inicio from "../pages/Inicio.jsx";
import Nosotros from "../pages/Nosotros.jsx";
import Servicios from "../pages/Servicios.jsx";
import Contacto from "../pages/Contacto.jsx";

import Privacidad from "../pages/Privacidad.jsx";
import Cookies from "../pages/Cookies.jsx";
import Terminos from "../pages/Terminos.jsx";
import AvisoLegal from "../pages/AvisoLegal.jsx";
import Accesibilidad from "../pages/Accesibilidad.jsx";

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />

        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/accesibilidad" element={<Accesibilidad />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default Router;
