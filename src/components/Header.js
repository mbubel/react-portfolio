import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div className="header fixed-top">
      <Link to="/" className="headerLink" >Home </Link>
      <Link to="/about" className="headerLink"> About </Link>
      <Link to="/projects" className="headerLink"> Projects</Link>
    </div>
  );
}

export default Header;
