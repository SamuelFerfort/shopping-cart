import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import useFetchItems from "./hooks/useFetchItems";

const URL = "https://fakestoreapi.com/products";

function App() {
  const { items, cart, setCart, isLoading, error } = useFetchItems(URL);

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
