import { useOutletContext } from "react-router-dom";
export default function Cart() {
  const { cart, setCart } = useOutletContext();

  console.log(cart);

  const total = cart.reduce((x, item) => x + item.price * item.qty, 0);
  return (
    <>
      <ul>
        {cart.map((i) => (
          <li key={i.id}>{i.qty * i.price}$</li>
        ))}
      </ul>

      <div>{total}</div>
    </>
  );
}
