import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div className="header fixed-top">
      <Link to="/react-portfolio/home" className="headerLink" >About Me </Link>
      <Link to="/react-portfolio/about" className="headerLink"> Biography </Link>
      <Link to="/react-portfolio/projects" className="headerLink"> Projects</Link>
    </div>
  );
}

export default Header;
