import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="header-logo" onClick={closeMenu}>
          <img src="/logo_hbt.png" alt="HBT Engineering & Technology" />
        </NavLink>

        <button
          className="header-menu-button"
          type="button"
          aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header-nav ${menuOpen ? "is-open" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>Inicio</NavLink>
          <NavLink to="/nosotros" onClick={closeMenu}>Nosotros</NavLink>
          <NavLink to="/servicios" onClick={closeMenu}>Servicios</NavLink>
          <NavLink to="/soluciones" onClick={closeMenu}>Soluciones</NavLink>
          <NavLink to="/proyectos" onClick={closeMenu}>Proyectos</NavLink>
          <NavLink to="/contacto" onClick={closeMenu}>Contacto</NavLink>
        </nav>

        <div className="header-actions">
          <NavLink to="/contacto" className="header-cta">
            Contactanos
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
