import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" aria-label="Pie de página">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img
              src="/logo_footer.png"
              alt="HBT Engineering & Technology Ltda."
              className="footer__logo"
            />

            <p>
              Ingeniería y tecnología para transformar procesos, automatizar
              operaciones y acelerar el crecimiento empresarial.
            </p>
          </div>

          <nav className="footer__column" aria-label="Servicios">
            <h3>Servicios</h3>
            <Link to="/servicios">Ingeniería de procesos</Link>
            <Link to="/servicios">Desarrollo de software</Link>
            <Link to="/servicios">Automatización</Link>
            <Link to="/servicios">Datos &amp; BI</Link>
          </nav>

          <nav className="footer__column" aria-label="Empresa">
            <h3>Empresa</h3>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/soluciones">Soluciones</Link>
            <Link to="/proyectos">Proyectos</Link>
            <Link to="/industrias">Industrias</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>

          <nav className="footer__column" aria-label="Legal">
            <h3>Legal</h3>
            <Link to="/privacidad">Política de privacidad</Link>
            <Link to="/terminos">Términos de uso</Link>
            <Link to="/cookies">Política de cookies</Link>
            <Link to="/aviso-legal">Aviso legal</Link>
            <Link to="/accesibilidad">Accesibilidad</Link>
          </nav>

          <address className="footer__column footer__contact">
            <h3>Contacto</h3>
            <span>Talca, Región del Maule</span>
            <a href="mailto:contacto@hbttechnology.cl">
              contacto@hbttechnology.cl
            </a>
            <a href="tel:+569XXXXXXXX">+56 9 XXXX XXXX</a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </address>
        </div>

        <div className="footer__bottom">
          <p>
            © 2026 HBT Engineering &amp; Technology Ltda. Todos los derechos
            reservados.
          </p>

          <nav className="footer__bottom-links" aria-label="Enlaces inferiores">
            <Link to="/">Inicio</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/blog">Blog</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;