import React from "react";
import "./Home.css";

import Effect from "react-reveal/Slide";

import Welcome from "./home-components/Welcome/Weclome.jsx";
import Education from "./home-components/Education/Education.jsx";
import Projects from "./home-components/Projects/Projects.jsx";
import ContactMe from "./home-components/ContactMe/ContactMe.jsx";

const Home = props => (
  <Effect top cascade className="m-0">
    <div className="home">
      <div>
        <Welcome />
      </div>
      <div>
        <Education />
      </div>
      <div>
        <Projects projectsList={props.projectsList} />
      </div>
      <div>
        <ContactMe />
      </div>
    </div>
  </Effect>
);

export default Home;
