import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Oops!</h1>
      <p>That page does not exist</p>
      <Link to="/">Go back to the Home page...</Link>
    </div>
  );
};

export default NotFound;
