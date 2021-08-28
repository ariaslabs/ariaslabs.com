import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Project from "./components/Project.js";

const projectsData = require("./assets/projects.json");

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container" data-bs-spy="scroll" data-bs-target="#navbar">
        <div id="welcome" className="welcome typewriter-wrapper">
          <span className="bash-icon">- $</span>
          <div className=" hello typewriter">Welcome to my Site.</div>
        </div>
        <div id="about">
          <div className="about-main">
            <div className="name-container text-center">
              <span className="name">Christopher Arias Jr</span>
              <small className="title"> - Full-Stack Developer</small>
            </div>

            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              fugiat, maxime iusto fuga mollitia consequatur autem quo eos
              eligendi eum ab rem expedita, debitis nam sapiente enim minima!
              Sed, recusandae!
            </p>
          </div>
        </div>
        <div id="projects">
          <h2 className="text-center mb-5 mt-5">Projects</h2>
          {projectsData.map((site) => (
            <Project projectData={site} />
          ))}
        </div>
        <div id="contact">
          <h2 className="text-center mb-3 mt-5">Contact</h2>
          <div>
            <small>Email: </small>
            <a href="christopher.arias.jr@gmail.com">
              christopher.arias.jr@gmail.com
            </a>
            <br />
            <small>Github: </small>
            <a href="https://github.com/ariaslabs">
              https://github.com/ariaslabs
            </a>
            <br />
            <small>Linkden: </small>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
