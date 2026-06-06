import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";
import { useLanguage } from "../context/useLanguage";

function Footer() {
  const { t } = useLanguage();
  const { setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    setIsCartOpen(false);
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <button
            className="footer-brand-heading footer-logo-button"
            type="button"
            onClick={handleLogoClick}
            aria-label="Lux Café Co home"
          >
            <img
              className="footer-logo-img"
              src="/images/logo.png"
              alt="Lux Café Co logo"
            />
            <h2>{t.common.lux}</h2>
          </button>

          <p>{t.footer.description}</p>

          <div className="footer-contact">
            <a href="mailto:luxcafecanada@hotmail.com">
              Email: luxcafecanada@hotmail.com
            </a>

            <div className="footer-socials">
              <a
                href="https://www.instagram.com/luxcafeco/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <img src="/icons/instagram.svg" alt="" />
              </a>

              <a
                href="https://wa.me/15875788280?text=Hello%20Lux%20Cafe%20Co"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <img src="/icons/whatsapp.svg" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <Link to="/products">{t.nav.collection}</Link>
          <Link to="/about">{t.nav.origin}</Link>
          <Link to="/wholesale">{t.nav.wholesale}</Link>
          <Link to="/contact">{t.nav.contact}</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;