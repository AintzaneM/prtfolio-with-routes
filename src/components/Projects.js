// components/Projects.js

import React from 'react';
import { Link } from 'react-router-dom';
import myProjects from "../components/data/projectList.json"

export const Projects = () => {
 
  return (
    <div>
      <h2>Projects:</h2>
      {myProjects.map((eachProject, index) => {
        return (
          <div key={eachProject.id}>
            <h3>
              {eachProject.name}
            </h3>
            <h4>{eachProject.technologies}</h4>

            <Link to={`/projects/${eachProject.id}`}> More Details </Link>
            <hr />
          </div>
        )
      })}
  </div>
  )
}

