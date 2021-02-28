import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div className="header">
      <ul>
        
          <Link to="/">Home</Link>
        
        
          <Link to="/about">About</Link>
        
        
          <Link to="/projects">Projects</Link>
        
      </ul>
    </div>
  );
}

export default Header;
