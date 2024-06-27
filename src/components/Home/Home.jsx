import img from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import styles from "./Home.module.css"

export default function Home() {
  return (
    <main>
      <section>
        <img src={img} alt="" />
        <div className={styles.content}>
          <h1>FakeStore</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            tenetur ipsum omnis est tempora velit alias similique placeat id ad
            tempore voluptates rem.
          </p>
          <Link to="/shop" className="home-link">Shop</Link>
        </div>
      </section>
     
    </main>
  );
}
