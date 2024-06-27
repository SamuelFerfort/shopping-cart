import { useEffect, useState } from "react";

const useFetchItems = (URL) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        setItems(data);
        setLoading(false);
      } catch (err) {
        console.error(`Error fetching items:`, err);
        setError(err.message);
        setLoading(false);
      }
    };
    fetchItems();
  }, [URL]);

  return { items, cart, setCart, isLoading, error };
};

export default useFetchItems;
