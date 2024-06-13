import { useOutletContext, Link } from "react-router-dom";
import CartCard from "./CartCard";

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
          <span>Total items: {cart.length}</span>
          <span>Total before tax: {total}$ </span>
          <span>Tax: 10%</span>
          <span>Total Price: {(total * 1.1).toFixed(2)}$</span>
          <button>Buy</button>
        </article>
      </div>
    </main>
  );
}
