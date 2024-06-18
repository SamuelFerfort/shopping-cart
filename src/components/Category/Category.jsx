import { useParams, useOutletContext } from "react-router-dom";
import Card from "../Card/Card";
import Notification from "../Notification";
import { useState } from "react";
import styles from "./Category.module.css"


export default function Category() {
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const addItemToCart = () => {
    setNotificationMessage("Item added to cart");
    setNotificationVisible(true);

    setTimeout(() => {
      setNotificationVisible(false);
    }, 3000);
  };

  let { category } = useParams();
  const { items, setCart, cart } = useOutletContext();
  let filteredItems = items;

  if (category === "women") category = "women's clothing";
  if (category === "men") category = "men's clothing";
  if (category === "all" || !category) category = "All items";
  if (category && category !== "All items") {
    filteredItems = items.filter((item) => item.category === category);
    category = category.charAt(0).toUpperCase() + category.slice(1);
  }

  return (
    <main>
      <h1>{category}</h1>
      <div className={styles["shop-content"]}>
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            {...item}
            setCart={setCart}
            cart={cart}
            addItemToCart={addItemToCart}
          />
        ))}
      </div>
      <Notification
        message={notificationMessage}
        visible={notificationVisible}
      />
    </main>
  );
}
