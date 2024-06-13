import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Shopping Cart</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}
