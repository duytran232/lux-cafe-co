import { useCart } from "../context/useCart";
import { useLanguage } from "../context/useLanguage";

function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen } = useCart();
  const { t } = useLanguage();

  return (
    <aside className={`cart-drawer ${isCartOpen ? "cart-open" : ""}`}>
      <button className="cart-close" onClick={() => setIsCartOpen(false)}>
        ×
      </button>

      <p className="eyebrow">{t.cart.eyebrow}</p>
      <h2>{t.cart.title}</h2>

      {cartItems.length === 0 ? (
        <p className="cart-empty">{t.cart.empty}</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div>
                <strong>{t.products.names[item.id] || item.name}</strong>
                <span>{item.size} × {item.quantity}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}

export default CartDrawer;