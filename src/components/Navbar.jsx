import { useState } from "react";
import { NavLink } from "react-router-dom";

import Button from "./Button";
import LanguageSwitcher from "./LanguageSwitcher";
import AuthModal from "./AuthModal";
import { useCart } from "../context/useCart";
import { useLanguage } from "../context/useLanguage";

const navItems = [
  { to: "/", labelKey: "home" },
  { to: "/products", labelKey: "collection" },
  { to: "/about", labelKey: "origin" },
  { to: "/wholesale", labelKey: "wholesale" },
  { to: "/contact", labelKey: "contact" },
];

function NavbarActions({ showExplore = false }) {
  const { cartCount, setIsCartOpen } = useCart();
  const { t } = useLanguage();

  return (
    <div className="nav-actions">
      <AuthModal />
      <LanguageSwitcher />

      <button
        className="cart-button icon-action"
        type="button"
        onClick={() => setIsCartOpen(true)}
        aria-label="Open cart"
      >
        <img src="/icons/cart.svg" alt="" />
        <span>{cartCount}</span>
      </button>

      {showExplore && <Button to="/products">{t.nav.explore}</Button>}
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className={`navbar ${isOpen ? "menu-open" : ""}`}>
        <div className="nav-left">
          <NavLink
            to="/"
            className="brand-logo"
            onClick={closeMenu}
            aria-label="Lux Café Co home"
          >
            <img
              className="brand-logo-img"
              src="/images/logo.png"
              alt="Lux Café Co logo"
            />
          </NavLink>
        </div>

        <div className="nav-center">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {t.nav[item.labelKey]}
            </NavLink>
          ))}
        </div>

        <div className="nav-right">
          <NavbarActions showExplore />
        </div>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <small>{t.nav.menu}</small>
        </button>

        <div className="mobile-menu">
          {navItems.map((item, index) => (
            <NavLink key={item.to} to={item.to} onClick={closeMenu}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {t.nav[item.labelKey]}
            </NavLink>
          ))}

          <NavbarActions />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;