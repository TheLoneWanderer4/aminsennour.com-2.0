import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import ProjectPage from "./components/ProjectPage/ProjectPage.jsx";
import Home from "./components/Home/Home.jsx";
import Nav from "./components/Nav/Nav.jsx";

import Fade from "react-reveal/Fade"; // Importing Fade effect

import projectsList from "./projects/index.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { projectsList };
  }

  // this is a paper fix, it's bad, but it works.
  RenderNav = withRouter(props => {
    if (props.location.pathname.match(/react-/)) {
      return <div />;
    } else {
      return <Nav />;
    }
  });

  ReactRoutes(projectsList) {
    // This meta function generates the routes used by the project pages for any react projct
    return (
      <div>
        {this.state.projectsList
          .filter(item => item.isReact)
          .map(item =>
            item.projects.map(item => (
              <Route
                key={item.title}
                // the react- is there so the page can exclude the normal page rendering, like the nav bar,
                // for the react projects
                path={"/react-" + item.title}
                exact
                component={item.component}
              />
            ))
          )}
      </div>
    );
  }

  ProjectRoutes(projectsList) {
    // This generates the routes for all the project pages, based off the imported JSON objects
    return (
      <div>
        {this.state.projectsList.map(item => (
          <Route
            key={item.label}
            path={"/" + item.label}
            exact
            component={() => (
              <Fade>
                <ProjectPage projectsJSON={item} />{" "}
              </Fade>
            )}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="bg-secondary">
        <this.RenderNav />
        {this.ReactRoutes(this.state.projectsList)}
        {this.ProjectRoutes(this.state.projectsList)}
        <Route
          path="/"
          exact
          component={() => (
            <Fade>
              <Home projectsList={this.state.projectsList} />
            </Fade>
          )}
        />
      </div>
    );
  }
}

export default App;
