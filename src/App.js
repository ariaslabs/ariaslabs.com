import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Project from "./components/Project.js";

const projectsData = require("./assets/projects.json");

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-xl" data-spy="scroll" data-target=".navbar"  data-offset="50">
        <div id="welcome" className="welcome typewriter-wrapper">
          <span className="bash-icon">- $</span>
          <div className=" hello typewriter">Welcome to my Site.</div>
        </div>
        <section id="about">
          <div className="about-main">
            <div className="name-container text-center">
              <span className="name">Christopher Arias Jr</span>
              <small className="title"> - Full-Stack Developer</small>
            </div>
            <p className="description">
              I'm Christohper, I make cool apps and want to work with you and your buiness. 
            </p>
          </div>
        </section>
        <section id="projects">
          <h2 className="text-center mb-5 mt-5">Projects</h2>
          {projectsData.map((site) => (
            <Project projectData={site} />
          ))}
        </section>
        <section id="contact">
          <h2 className="text-center mb-3 mt-5">Contact / Sites</h2>
          <div>
            <small>Email: </small>
            <a href="mailto:christopher.arias.jr@gmail.com">
              christopher.arias.jr@gmail.com
            </a>
            <br />
            <small>Github: </small>
            <a href="https://github.com/ariaslabs">
              https://github.com/ariaslabs
            </a>
            <br />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
