import img from "./assets/shoes.jpg";

function App() {
  return (
    <>
      <header>
        <h1>Shopping Cart</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Cart</a>
        </nav>
      </header>
      <main>
        <section>
          <img src={img} alt="" />
          <div className="content">
            <h1>Title</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam tenetur ipsum omnis est tempora velit alias similique placeat id ad tempore voluptates rem, distinctio fugiat quibusdam non provident sequi. Accusamus.</p>
            <a href="">Link to shop</a>
          </div>
        </section>
        <section></section>
        <section></section>
      </main>
    </>
  );
}

export default App;
