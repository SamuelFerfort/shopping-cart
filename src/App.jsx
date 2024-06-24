import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

const URL = "https://fakestoreapi.com/products";

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header cart={cart} />
      <Outlet context={{ items, cart, setCart, isLoading }} />
    </>
  );
}

export default App;
