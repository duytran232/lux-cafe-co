import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <nav className={`navbar ${isOpen ? "menu-open" : ""}`}>
        <div className="nav-left">
          <NavLink
            to="/"
            className="brand-logo"
            aria-label="Lux Café Co home"
            onClick={closeMenu}
          >
            <div className="logo-mark">L</div>
          </NavLink>
        </div>

        <div className="nav-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Collection</NavLink>
          <NavLink to="/about">Origin</NavLink>
          <NavLink to="/wholesale">Wholesale</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="nav-right">
          <Button to="/products">Explore Coffee</Button>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <small>Menu</small>
        </button>

        <div className="mobile-menu">
          <NavLink to="/" onClick={closeMenu}>
            <span>01</span> Home
          </NavLink>
          <NavLink to="/products" onClick={closeMenu}>
            <span>02</span> Collection
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            <span>03</span> Origin
          </NavLink>
          <NavLink to="/wholesale" onClick={closeMenu}>
            <span>04</span> Wholesale
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            <span>05</span> Contact
          </NavLink>

          <div className="mobile-menu-divider">
            <i />
            <i />
            <i />
          </div>

          <Button to="/products">Explore Coffee</Button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;