import React from "react";
import "./Home.css";

import Welcome from "./home-components/Welcome/Weclome.jsx";
import Education from "./home-components/Education/Education.jsx";
import Projects from "./home-components/Projects/Projects.jsx";
import ContactMe from "./home-components/ContactMe/ContactMe.jsx";

const Home = props => (
  <div className="home">
    <Welcome />
    <Education />
    <Projects projectsList={props.projectsList} />
    <ContactMe />
  </div>
);

export default Home;
