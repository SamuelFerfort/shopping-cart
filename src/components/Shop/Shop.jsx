import { NavLink, Outlet, useOutletContext } from "react-router-dom";
import styles from "./Shop.module.css"

export default function Shop() {
  const { items, setCart, cart } = useOutletContext();

  return (
    <div className={styles["shop-container"]}>
      <aside>
        <NavLink to="all" className={({ isActive }) => isActive ? "active-link" : ""}>All Categories</NavLink>
        <NavLink to="jewelery" className={({ isActive }) => isActive ? "active-link" : ""}>Jewelry</NavLink>
        <NavLink to="electronics" className={({ isActive }) => isActive ? "active-link" : ""}>Electronics</NavLink>
        <NavLink to="men" className={({ isActive }) => isActive ? "active-link" : ""}>Men</NavLink>
        <NavLink to="women" className={({ isActive }) => isActive ? "active-link" : ""}>Women</NavLink>
      </aside>

      <Outlet context={{ items, setCart, cart }} />
    </div>
  );
}


