import img from "../assets/shoes.jpg";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <main>
      <section>
        <img src={img} alt="" />
        <div className="content">
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            tenetur ipsum omnis est tempora velit alias similique placeat id ad
            tempore voluptates rem.
          </p>
          <Link to="/shop">Link to shop</Link>
        </div>
      </section>
      <section></section>
      <section></section>
    </main>
  );
}
