import { useOutletContext } from "react-router-dom";
import CartCard from "./CartCard";

export default function Cart() {
  const { cart, setCart } = useOutletContext();

  const total = cart.reduce((x, item) => x + item.price * item.qty, 0).toFixed(2);

  if (total === 0) return <h1>No Items in your Cart</h1>;

  return (
    <main>
      <aside>
        {cart.map((item) => (
          <CartCard key={item.id} {...item} setCart={setCart} cart={cart} />
        ))}
      </aside>

      <div>Total: {total}$</div>
    </main>
  );
}
