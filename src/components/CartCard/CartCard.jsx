import PropTypes from "prop-types";
import styles from "./CartCard.module.css";

CartCard.propTypes = {
  qty: PropTypes.number,
  id: PropTypes.number,
  price: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  setCart: PropTypes.func,
  cart: PropTypes.array,
};

export default function CartCard({
  qty,
  id,
  price,
  title,
  image,
  setCart,
  cart,
}) {
  function handleMinusQty() {
    let newCart = [...cart];
    const index = cart.findIndex((item) => item.id === id);
    if (qty - 1 === 0) {
      newCart.splice(index, 1);
      setCart(newCart);
    } else {
      newCart[index].qty--;
      setCart(newCart);
    }
  }

  function handlePlusQty() {
    const index = cart.findIndex((item) => item.id === id);
    const newCart = [...cart];
    newCart[index].qty++;
    setCart(newCart);
  }

  function handleDelete() {
    let newCart = [...cart];
    const index = cart.findIndex((item) => item.id === id);

    newCart.splice(index, 1);
    setCart(newCart);
  }

  return (
    <article className={styles.cartCard}>
      <div className={styles.left}>
        <div>
          <img src={image} alt={title} />
        </div>
        <h1>{title}</h1>
      </div>

      <div className="right-cart-card">
        <span className={styles.price}>${price}</span>
        <div className={styles["btn-cart-container"]}>
          <button onClick={handleMinusQty}>-</button>
          <span>{qty}</span>
          <button onClick={handlePlusQty}>+</button>
        </div>
       <span className={styles.totalPrice}>${(price * qty).toFixed(2)}</span>
      </div>
      <button className={styles.delete} onClick={handleDelete}>x</button>
    </article>
  );
}
