function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <h2>HBT</h2>
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
        </div>

        <div className="footer__column">
          <h3>Contacto</h3>
          <p>Talca, Chile</p>
          <p>contacto@hbt.cl</p>
          <p>+56 9 XXXX XXXX</p>
        </div>
      </div>

      <div className="footer__bottom">
        © 2026 HBT Engineering & Technology Ltda. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;