import github from "../assets/github-6-64.png";
import studentReg from "../assets/student-reg.png";
import heroku from "../assets/icons8-heroku-50.png";
import team from "../assets/fitness-tracker.png";

function Projects(props) {
  return (
    <div id="projectsGrid" class="container">
      <div class="row-sm">
        <div class=".col-sm-4">
          <a>
            <h2>Student registration</h2>
            <img
              id="studentRegistration"
              target="_blank"
              src={studentReg}
              className="img-thumbnail img-fluid"
              alt = "student registration picture"
            ></img>
            <a href="https://github.com/mbubel/student-registration">
              <img target="_blank" src={github} className="projectIcons " alt="github icon" />
            </a>
            <a href="https://student-registration-tracker.herokuapp.com/">
              <img target="_blank" src={heroku} className="projectIcons " alt ="heroku icon"/>
            </a>
          </a>
        </div>
      </div>
      <div class="row-sm">
        <div class=".col-sm-4">
          <a>
            <h2>Fitness Tracker</h2>
            <img
              id="team-two"
              target="_blank"
              src={team}
              className="img-thumbnail img-fluid"
              alt = "fitness tracker picture"
            ></img>
            <a href="https://github.com/mbubel/fitness-tracker">
              <img
                target="_blank"
                src={github}
                className="projectIcons img-fluid"
                alt="github icon"
              />
            </a>
            <a href="https://fitness-tracker-mb.herokuapp.com/">
              <img
                target="_blank"
                src={heroku}
                className="projectIcons img-fluid"
                alt ="heroku icon"
              />
            </a>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
