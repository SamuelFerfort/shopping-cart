import { Link } from "react-router-dom";
import styles from "./Error.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.notFound}>
      <h1>404 Not Found!</h1>
      <span>
        {" "}
        <Link to="/" >
          Home
        </Link>
      </span>
    </div>
  );
};

export default ErrorPage;
