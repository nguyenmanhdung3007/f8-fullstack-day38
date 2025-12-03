import paths from "@/configs/paths";
import { Link } from "react-router";

function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <ul>
        <li>
          <Link to={paths.counter}>Bài 1: Sử dụng useState(callback) #1</Link>
        </li>
        <li>
          <Link to={paths.countdown}>Bài 2: Sử dụng useState(callback) #2</Link>
        </li>
        <li>
          <Link to={paths.shoppingCart}>Bài 3: Sử dụng Context API</Link>
        </li>
      </ul>
    </>
  );
}

export default HomePage;
