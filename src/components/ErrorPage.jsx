import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="no-items">
      <h1>404 Not Found!</h1>
      <span>
        {" "}
        <Link to="/" className="shop-link">
          Home
        </Link>
      </span>
    </div>
  );
};

export default ErrorPage;
