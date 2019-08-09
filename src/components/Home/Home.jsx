import React from "react";
import "./Home.css";

import Effect from "react-reveal/Fade";

import Welcome from "./home-components/Welcome/Weclome.jsx";
import Education from "./home-components/Education/Education.jsx";
import Projects from "./home-components/Projects/Projects.jsx";
import ContactMe from "./home-components/ContactMe/ContactMe.jsx";
import Footer from "./home-components/Footer/Footer.jsx";

const Home = props => (
  <Effect duration={30} className="m-0">
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
      <div>
        <Footer />
      </div>
    </div>
  </Effect>
);

export default Home;
