import { useOutletContext, Link } from "react-router-dom";
import CartCard from "./CartCard";

const TAX = 0.1;

export default function Cart() {
  const { cart, setCart } = useOutletContext();

  const total = cart
    .reduce((x, item) => x + item.price * item.qty, 0)
    .toFixed(2);

  if (total < 1) {
    return (
      <div className="no-items">
        <h1>No items in your cart yet!</h1>
        <span>
          {" "}
          <Link to="/shop" className="shop-link">
            Shop
          </Link>
        </span>
      </div>
    );
  }

  return (
    <main className="cart">
      <aside className="cart-card-container">
        {cart.map((item) => (
          <CartCard key={item.id} {...item} setCart={setCart} cart={cart} />
        ))}
      </aside>

      <div className="total">
        <article className="total-card">
          <h1>Summary</h1>
          <div>
            <span>Subtotal:</span>
            <span className="result">{total}$</span>
          </div>
          <div>
            <span>Tax: </span>
            <span className="result">{(total * TAX).toFixed(2)}$</span>
          </div>{" "}
          <div>
            <span>Total: </span>
            <span className="result">{(total * 1.1).toFixed(2)}$</span>
          </div>
          <button>Checkout</button>
        </article>
      </div>
    </main>
  );
}
