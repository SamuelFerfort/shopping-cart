import { Link } from "react-router-dom";
import PropTypes from "prop-types";

Header.propTypes = {
  cart: PropTypes.number,
};
export default function Header({ cart }) {
  return (
    <header>
      <h1>
        <Link to="/">Shopping Cart</Link>
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart" className="cartHolder">
          <span className="cartIcon"></span>
          <span>{cart.length}</span>
        </Link>
      </nav>
    </header>
  );
}
