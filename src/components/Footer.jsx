import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-brand-heading">
            <div className="logo-mark">L</div>
            <h2>Lux Café Co</h2>
          </div>

          <p>Colombian coffee, refined for shared moments.</p>
        </div>

        <div className="footer-links">
          <Link to="/products">Collection</Link>
          <Link to="/about">Origin</Link>
          <Link to="/wholesale">Wholesale</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;