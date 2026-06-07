import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useCart } from "../context/useCart";
import { useLanguage } from "../context/useLanguage";

function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, clearCart } = useCart();
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    setIsCartOpen(false);
  }, [location.pathname, setIsCartOpen]);

  return (
    <>
      <button
        className={`cart-backdrop ${isCartOpen ? "cart-backdrop-open" : ""}`}
        type="button"
        aria-label="Close cart"
        onClick={() => setIsCartOpen(false)}
      />

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
        {cartItems.length > 0 && (
          <button
            className="cart-clear"
            type="button"
            onClick={clearCart}
          >
            {t.cart.clear}
          </button>
        )}

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
    </>
  );
}

export default CartDrawer;