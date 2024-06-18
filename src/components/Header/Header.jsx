import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Header.module.css"
Header.propTypes = {
  cart: PropTypes.array,
};
export default function Header({ cart }) {
  return (
    <header>
      <h1>
        <NavLink to="/">FakeStore</NavLink>
      </h1>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Shop
        </NavLink>
        <NavLink to="/cart" className={styles.cartHolder}>
          <span className={styles.cartIcon}></span>
          <span>{cart.length}</span>
        </NavLink>
      </nav>
    </header>
  );
}
