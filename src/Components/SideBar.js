import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="list-unstyled">
      <ul>
        <li>
          <Link to="/">Get All Products</Link>
        </li>
        {/* <li>
          <Link to="/">Home</Link>
        </li> */}
      </ul>
    </div>
  );
}
export default SideBar;
