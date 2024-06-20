import { useState } from "react";
import PropTypes from "prop-types";
import cardStyles from "./Card.module.css"

Card.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  setCart: PropTypes.func,
  cart: PropTypes.array,
  addItemToCart: PropTypes.func,
};

export default function Card({
  id,
  title,
  price,
  image,
  setCart,
  cart,
  addItemToCart,
}) {
  const [qty, setQty] = useState(1);

  function handleCLick() {
    const itemIndex = cart.findIndex((item) => item.id === id);
    let newCart = [...cart];
    addItemToCart();

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
    <article className={cardStyles.card}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      
      <div>
        <span>{price}$</span>
        <div className={cardStyles.qtyContainer}>
          <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
          <span>{qty}</span>
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>
      </div>
      <div>
      <button className={cardStyles.addCartBtn} onClick={handleCLick}>
        Add to Cart
      </button>
      </div>
      
    </article>
  );
}
