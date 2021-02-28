import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="container">
      <div className="name-text">
        <p>Hi, I'm Michael Bubel.</p>
        <h4>
          I'm currently enrolled in the UCSD Full Stack Development Program and
          projected to graduate in March of 2021.
        </h4>
        <h5><Link to="/about">About</Link></h5>
      </div>
    </div>
  );
}

export default Home;
