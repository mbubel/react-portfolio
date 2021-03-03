import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div className="header fixed-top">
      <Link to="/home" className="headerLink" >Home </Link>
      <Link to="/about" className="headerLink"> About Me </Link>
      <Link to="/projects" className="headerLink"> Projects</Link>
    </div>
  );
}

export default Header;
