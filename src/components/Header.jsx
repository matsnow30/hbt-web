import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="header__brand">
          HBT
        </NavLink>

        <nav className="header__nav" aria-label="Navegación principal">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/nosotros">Nosotros</NavLink>
          <NavLink to="/servicios">Servicios</NavLink>
          <NavLink to="/soluciones">Soluciones</NavLink>
          <NavLink to="/proyectos">Proyectos</NavLink>
          <NavLink to="/industrias">Industrias</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>

        <NavLink to="/contacto" className="header__cta">
          Solicitar asesoría
        </NavLink>
      </div>
    </header>
  );
}

export default Header;