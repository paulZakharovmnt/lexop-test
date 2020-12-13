import React, { useContext, useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import CreateNewProject from "./CreateNewProject/CreateNewProject";
import ListOfProjects from "./Projects/ListOfProjects";
import projectsContext from "../../context/projects-context/projects-context";
import fetchProjectsAllIds from "../../core/getFromFBFunctions/fetchProjectsAllIdsFromFB";
import fetchProjectsById from "../../core/getFromFBFunctions/fetchProjectsByIdsFromFB";
import setProjectsAllIdsToFB from "../../core/setToFBFunctions/setProjectsAllIdsToFB";
import setProjectsByIdToFB from "../../core/setToFBFunctions/setProjectsByIdsToFB";

const Main = ({ user }) => {
  const [createNewProject, setCreateNewProject] = useState(false);

  const {
    projectsById,
    projectsAllIds,
    setProjectsAllIdsFromFBtoState,
    setProjectsByIdFromFBtoState,
    addProjectToState,
    deleteProject,
    updateProject,
  } = useContext(projectsContext);

  useEffect(() => {
    fetchProjectsById(user).onSnapshot((doc) => {
      setProjectsByIdFromFBtoState(doc.data());
    });

    fetchProjectsAllIds(user).onSnapshot((doc) => {
      if (!doc.data().projectsAllIdsList) {
        return;
      }
      setProjectsAllIdsFromFBtoState(doc.data().projectsAllIdsList);
    });
  }, [user]);

  useEffect(() => {
    if (projectsAllIds.length > 0) {
      setProjectsAllIdsToFB(user, projectsAllIds);
    }

    if (projectsById) {
      setProjectsByIdToFB(user, projectsById);
    }
  }, [user, projectsAllIds, projectsById]);

  const handleAddProjectToListSubmit = (project) => {
    addProjectToState(project);
  };

  const handleUpdateProject = (updatedProject) => {
    updateProject(updatedProject);
  };

  const handleDeleteProjectClick = (project) => {
    if (projectsAllIds.length === 1) {
      setProjectsAllIdsToFB(user, []);
    }
    deleteProject(project);
  };

  return (
    <div className="main-container">
      <Nav
        setCreateNewProject={setCreateNewProject}
        createNewProject={createNewProject}
      />
      {createNewProject && (
        <CreateNewProject
          handleAddProjectToListSubmit={handleAddProjectToListSubmit}
          setCreateNewProject={setCreateNewProject}
        />
      )}
      {projectsAllIds.length > 0 && createNewProject === false && (
        <ListOfProjects
          projectAllIds={projectsAllIds}
          projectsById={projectsById}
          handleUpdateProject={handleUpdateProject}
          handleDeleteProjectClick={handleDeleteProjectClick}
        />
      )}
    </div>
  );
};

export default Main;
