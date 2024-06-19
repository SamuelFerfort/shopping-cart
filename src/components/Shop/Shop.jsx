import { NavLink, Outlet, useOutletContext } from "react-router-dom";
import styles from "./Shop.module.css";

export default function Shop() {
  const { items, setCart, cart } = useOutletContext();

  return (
    <div className={styles["shop-container"]}>
      <aside>
        <NavLink
          to="all"
        >
          All Categories
        </NavLink>
        <NavLink
          to="jewelery"
        >
          Jewelry
        </NavLink>
        <NavLink
          to="electronics"
        >
          Electronics
        </NavLink>
        <NavLink
          to="men"
        >
          Men
        </NavLink>
        <NavLink
          to="women"
        >
          Women
        </NavLink>
      </aside>

      <Outlet context={{ items, setCart, cart }} />
    </div>
  );
}
