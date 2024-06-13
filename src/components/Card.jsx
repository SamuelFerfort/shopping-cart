import { useState } from "react";
import PropTypes from "prop-types";

Card.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  setCart: PropTypes.func,
  cart: PropTypes.array,
};

export default function Card({ id, title, price, image, setCart, cart }) {
  const [qty, setQty] = useState(1);

  function handleCLick() {
    const itemIndex = cart.findIndex((item) => item.id === id);
    let newCart = [...cart];

    if (itemIndex > -1) {
      newCart[itemIndex].qty += qty;
    } else {
      const newItem = {
        title,
        price,
        image,
        id,
        qty,
      };
      newCart = [...cart, newItem];
    }

    setCart(newCart);
  }

  return (
    <article>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <div>
        <span>{price}$</span>
        <div className="qty-container">
          <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
          <span>{qty}</span>
          <button onClick={() => setQty(qty + 1)}>+</button>
          <button onClick={handleCLick}>Add to Cart</button>
        </div>
      </div>
    </article>
  );
}
