import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useCart } from "../context/useCart";
import { useLanguage } from "../context/useLanguage";

function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen } = useCart();
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    setIsCartOpen(false);
  }, [location.pathname, setIsCartOpen]);

  return (
    <aside className={`cart-drawer ${isCartOpen ? "cart-open" : ""}`}>
      <button
        className="cart-close"
        type="button"
        onClick={() => setIsCartOpen(false)}
        aria-label="Close cart"
      >
        ×
      </button>

      <p className="eyebrow">{t.cart.eyebrow}</p>
      <h2>{t.cart.title}</h2>

      {cartItems.length === 0 ? (
        <p className="cart-empty">{t.cart.empty}</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => {
            const translatedItem = t.products.items[item.id];

            return (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={translatedItem?.name || item.name} />

                <div>
                  <strong>{translatedItem?.name || item.name}</strong>
                  <span>
                    {item.size} × {item.quantity}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </aside>
  );
}

export default CartDrawer;