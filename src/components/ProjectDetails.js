import React from 'react'
import myProjects from "../components/data/projectList.json"


function ProjectDetails(props) {
    // console.log(props)

    const projectObjectToDisplay = myProjects.find((project)=>{
        if(project.id=== props.match.params.projectId){
            return true
        } else {
            return false
        }

    })

    return (

        <div>
            {/* <p>Details for project {props.match.params.projectId} </p> */}

            <h2>Project Name: {projectObjectToDisplay.name}</h2>
            <h2>Year: {projectObjectToDisplay.year}</h2>
            <h2>Description {projectObjectToDisplay.description}</h2>
        </div>
    )

}
export default ProjectDetails