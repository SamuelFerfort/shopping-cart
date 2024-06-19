import { useOutletContext, Link } from "react-router-dom";
import CartCard from "../CartCard/CartCard";
import styles from "./Cart.module.css"

const TAX = 0.1;

export default function Cart() {
  const { cart, setCart } = useOutletContext();

  const total = cart
    .reduce((x, item) => x + item.price * item.qty, 0)
    .toFixed(2);

  if (total < 1) {
    return (
      <div className={styles["no-items"]}>
        <h1>Nothing to see here...</h1>
        <p>Why not do some shopping?</p>
        <span>
          {" "}
          <Link to="/shop" className="shop-link">
            Go to shop
          </Link>
        </span>
      </div>
    );
  }

  return (
    <main className={styles.cart}>
      <aside className={styles["cart-card-container"]}>
        {cart.map((item) => (
          <CartCard key={item.id} {...item} setCart={setCart} cart={cart} />
        ))}
      </aside>

      <div className={styles.total}>
        <article className={styles.totalCard}>
          <h1>Summary</h1>
          <div>
            <span>Subtotal:</span>
            <span className={styles.result}>{total}$</span>
          </div>
          <div>
            <span>Tax: </span>
            <span className={styles.result}>{(total * TAX).toFixed(2)}$</span>
          </div>{" "}
          <div>
            <span>Total: </span>
            <span className={styles.result}>{(total * 1.1).toFixed(2)}$</span>
          </div>
          <button>Checkout</button>
        </article>
      </div>
    </main>
  );
}
