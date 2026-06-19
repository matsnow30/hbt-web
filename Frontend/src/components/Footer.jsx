function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <div className="footer__logo-box">
            <img
              src="/logo_hbt.png"
              alt="HBT Engineering & Technology"
              className="footer__logo"
            />
          </div>

          <p>
            Ingeniería y tecnología para transformar procesos, automatizar
            operaciones y acelerar el crecimiento empresarial.
          </p>
        </div>

        <div className="footer__column">
          <h3>Servicios</h3>
          <p>Ingeniería de procesos</p>
          <p>Desarrollo de software</p>
          <p>Automatización</p>
          <p>Datos & BI</p>
        </div>

        <div className="footer__column">
          <h3>Empresa</h3>
          <p>Nosotros</p>
          <p>Soluciones</p>
          <p>Proyectos</p>
          <p>Industrias</p>
          <p>Blog</p>
        </div>

        <div className="footer__column">
          <h3>Legal</h3>
          <p>Política de privacidad</p>
          <p>Términos y condiciones</p>
          <p>Política de cookies</p>
          <p>Aviso legal</p>
          <p>Accesibilidad</p>
        </div>

        <div className="footer__column">
          <h3>Contacto</h3>
          <p>Talca, Chile</p>
          <p>contacto@hbt.cl</p>
          <p>+56 9 XXXX XXXX</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 HBT Engineering & Technology Ltda. Todos los derechos reservados.</p>

        <div className="footer__legal-links">
          <a href="/mapa-del-sitio">Mapa del sitio</a>
          <a href="/proteccion-datos">Protección de datos</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;