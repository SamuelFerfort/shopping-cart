import { useOutletContext } from "react-router-dom";
import CartCard from "./CartCard";

export default function Cart() {
  const { cart, setCart } = useOutletContext();

  const total = cart
    .reduce((x, item) => x + item.price * item.qty, 0)
    .toFixed(2);

  if (total < 1) return <h1>No Items in your Cart</h1>;

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
          <span>Total before tax: {total} </span>
          <span>Tax: 20%</span>
          <span>Total Price: {(total * 1.2).toFixed(2)}</span>
        </article>
       </div>
    </main>
  );
}
