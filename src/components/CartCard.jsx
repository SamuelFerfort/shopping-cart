import PropTypes from "prop-types";

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

  return (
    <article className="cartCard">
      <div>
        <img src={image} alt={title} />
        <h1>{title}</h1>
      </div>

      <div className="right-cart-card">
        <span className="price">{price}$</span>
        <div className="btn-cart-container">
          <button onClick={handleMinusQty}>-</button>
          <span>{qty}</span>
          <button onClick={handlePlusQty}>+</button>
        </div>
      </div>
    </article>
  );
}
