import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" aria-label="Pie de pagina">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img
              src="/logo_footer.png"
              alt="HBT Engineering & Technology Ltda."
              className="footer__logo"
              loading="lazy"
            />

            <p>
              Consultoria tecnologica para procesos, sistemas, automatizacion e indicadores.
            </p>
          </div>

          <nav className="footer__column" aria-label="Servicios">
            <h3>Servicios</h3>
            <Link to="/servicios">Diagnostico de procesos</Link>
            <Link to="/servicios">Sistemas a medida</Link>
            <Link to="/servicios">Automatizacion</Link>
            <Link to="/servicios">Tableros e indicadores</Link>
          </nav>

          <nav className="footer__column" aria-label="Empresa">
            <h3>Empresa</h3>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/soluciones">Soluciones</Link>
            <Link to="/proyectos">Proyectos</Link>
            <Link to="/industrias">Industrias</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>

          <nav className="footer__column" aria-label="Legal">
            <h3>Legal</h3>
            <Link to="/privacidad">Politica de privacidad</Link>
            <Link to="/terminos">Terminos de uso</Link>
            <Link to="/cookies">Politica de cookies</Link>
            <Link to="/aviso-legal">Aviso legal</Link>
            <Link to="/accesibilidad">Accesibilidad</Link>
          </nav>

          <address className="footer__column footer__contact">
            <h3>Contacto</h3>
            <span>Talca, Region del Maule</span>
            <a href="mailto:contacto@hbttechnology.cl">
              contacto@hbttechnology.cl
            </a>
            <a href="tel:+56950801142">+56 9 5080 1142</a>
            <Link to="/contacto">Enviar solicitud</Link>
          </address>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; 2026 HBT Engineering &amp; Technology Ltda. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
