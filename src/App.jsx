import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const URL = "https://fakestoreapi.com/products";

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(items);
  return (
    <>
      <Header />
      <Outlet context={{items, cart, setCart}}/>
    </>
  );
}

export default App;
