import linked from "../assets/linkedin-64.png";
import facebook from "../assets/facebook-64.png";
import github from "../assets/github-6-64.png";

function Footer(props) {
  return (
    <div className="footer fixed-bottom">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/michael-bubel-b95268155/"
      >
        <img src={linked} class="icons" height="40px" />
      </a> 
      <a target="_blank" href="https://github.com/mbubel">
        <img src={github} class="icons" height="40px" />
      </a>
      <a target="_blank" href="https://www.facebook.com/heyitsmichaelbubel">
        <img src={facebook} class="icons" height="40px" />
      </a>

    </div>
  );
}

export default Footer;


