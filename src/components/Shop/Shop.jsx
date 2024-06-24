import { NavLink, Outlet, useOutletContext } from "react-router-dom";
import styles from "./Shop.module.css";
import PropTypes from "prop-types";

Shop.propTypes = {
  isLoading: PropTypes.bool,
};

export default function Shop() {
  const { items, setCart, cart , isLoading} = useOutletContext();

  return (
    <div className={styles["shop-container"]}>
      <aside>
        <NavLink to="all">All Categories</NavLink>
        <NavLink to="jewelery">Jewelry</NavLink>
        <NavLink to="electronics">Electronics</NavLink>
        <NavLink to="men">Men</NavLink>
        <NavLink to="women">Women</NavLink>
      </aside>

      <Outlet context={{ items, setCart, cart, isLoading }} />
    </div>
  );
}
