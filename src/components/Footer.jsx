import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
        <div className="footer-brand-heading">
  <img
    className="footer-logo-img"
    src="/images/logo.png"
    alt="Lux Café Co logo"
  />
  <h2>{t.common.lux}</h2>
</div>

          <p>{t.footer.description}</p>
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