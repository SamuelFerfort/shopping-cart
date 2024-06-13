import { NavLink, Outlet, useOutletContext } from "react-router-dom";
export default function Shop() {
  const { items, setCart, cart } = useOutletContext();

  return (
    <div className="shop-container">
      <aside>
        <NavLink to="all">All Categories</NavLink>
        <NavLink to="jewelery">Jewelry</NavLink>
        <NavLink to="electronics">Electronics</NavLink>
        <NavLink to="men">Men</NavLink>
        <NavLink to="women">Women</NavLink>
      </aside>

      <Outlet context={{ items, setCart, cart }} />
    </div>
  );
}
