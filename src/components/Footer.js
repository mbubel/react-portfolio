import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">LinkedIn</Link>
        </li>
        <li>
          <Link to="">GitHub</Link>
        </li>
        <li>
          <Link to="">Facebook</Link>
        </li>
        <li>
          <Link to="">Email</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
