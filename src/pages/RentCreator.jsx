import { Link } from "react-router-dom";

function RentCreator() {
  return (
    <div>
      <button type="button">
        <Link to="user/">Person</Link>
      </button>
      <button type="button">
        <Link to="business/">Business</Link>
      </button>
    </div>
  );
}

export default RentCreator;
