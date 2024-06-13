export default function Card({ id, title, price, image, setCart }) {
  function handleCLick() {
    const item = {
      title,
      price,
      image,
      id,
    };
    
    setCart((prev) => ({
      ...prev,
      item,
    }));
  }

  return (
    <article>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <div>
        <span>{price}$</span>
        <button onClick={handleCLick}>Add</button>
      </div>
    </article>
  );
}
