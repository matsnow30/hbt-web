import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="header-logo">
          <img
            src="/logo_hbt.png"
            alt="HBT Engineering & Technology"
          />
        </NavLink>

        <nav className="header-nav">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/nosotros">Nosotros</NavLink>
          <NavLink to="/servicios">Servicios</NavLink>
          <NavLink to="/soluciones">Soluciones</NavLink>
          <NavLink to="/proyectos">Proyectos</NavLink>
          <NavLink to="/industrias">Industrias</NavLink>
        </nav>

        <div className="header-actions">
          <NavLink to="/contacto" className="header-cta">
            Contacto
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;