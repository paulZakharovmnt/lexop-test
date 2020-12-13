import React from "react";
import Project from "./Project";
import "./ListOfProjects.css";

const ListOfProjects = ({
  projectAllIds,
  projectsById,
  handleUpdateProject,
  handleDeleteProjectClick,
}) => {
  return (
    <div className="list-of-projects-container">
      {projectAllIds.map((project) => (
        <Project
          project={project}
          key={project}
          projectsById={projectsById}
          handleUpdateProject={handleUpdateProject}
          handleDeleteProjectClick={handleDeleteProjectClick}
        />
      ))}
    </div>
  );
};

export default ListOfProjects;
