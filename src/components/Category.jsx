import { useParams, useOutletContext } from "react-router-dom";
import Card from "./Card";

export default function Category() {
  let { category } = useParams();
  const { items, setCart, cart } = useOutletContext();
  let filteredItems = items;

  if (category === "women") category = "women's clothing";
  if (category === "men") category = "men's clothing";

  if (category && category !== "all") {
    filteredItems = items.filter((item) => item.category === category);
  }

  return (
    <main>
      <h1>{category === "all" ? "All Items" : category}</h1>
      <div className="shop-content">
        {filteredItems.map((item) => (
          <Card key={item.id} {...item} setCart={setCart} cart={cart} />
        ))}
      </div>
    </main>
  );
}
