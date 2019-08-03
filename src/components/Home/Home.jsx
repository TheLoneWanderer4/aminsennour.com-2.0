import React from "react";
import "./Home.css";

const Home = props => (
  <div className="">
    <div className="row m-0 p-0 align-items-center">
      <div className="col-md m-2">
        <div className="card p-2">
          {" "}
          <h1>Hi, I'm Amin Sennour.</h1>
          <p>{"{developer}"}</p>
          <p>{"{CS major at the UofA}"}</p>
        </div>
      </div>
      <div className="col-md m-2">
        <div className="card p-2">
          {" "}
          <h1>University of Arizona</h1>
          <p>
            <b>Projected Graduation: </b> 2022
          </p>
          <p>
            <b> College of Science </b>
          </p>
          <li>Major: Computer Science</li>
          <p>
            <b>College of Science</b>
          </p>
          <li>Major: Mathematics</li>
          <p></p>
          <p>
            <b>GPA: </b> 3.71
          </p>
        </div>
      </div>
    </div>
    <div className="">
      <div className="card m-4">
        <ul className="list-group list-group-flush">
          {props.projectsList.map(item => (
            <li key={item.label} className="list-group-item">
              <a href={"/#/" + item.label}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Home;
