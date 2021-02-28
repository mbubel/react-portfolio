import linked from "../assets/linkedin-64.png";
import facebook from "../assets/facebook-64.png";
import github from "../assets/github-6-64.png";
import email from "../assets/email-11-64.png";
import resume from "../assets/report-3-64.png";

function Footer(props) {
  return (
    <div className="footer fixed-bottom">
      <a
        className="footIcons"
        target="_blank"
        href="https://www.linkedin.com/in/michael-bubel-b95268155/"
      >
        <img src={linked} height="20vw" />
      </a>
      <a className="footIcons" target="_blank" href="https://github.com/mbubel">
        <img src={github} height="20vw" />
      </a>
      <a
        className="footIcons"
        target="_blank"
        href="https://www.facebook.com/heyitsmichaelbubel"
      >
        <img src={facebook} height="20vw" />
      </a>
      <a
        className="footIcons"
        target="_blank"
        href="mailto: michaelbubel.1989@gmail.com"
      >
        <img src={email} height="20vw" />
      </a>
      <a
        className="footIcons"
        target="_blank"
        href="https://drive.google.com/file/d/1bVn-607BJAn7uCcHLKKJvcf-RCblEkwZ/view?usp=sharing"
      >
        <img src={resume} height="20vw" />
      </a>
    </div>
  );
}

export default Footer;
