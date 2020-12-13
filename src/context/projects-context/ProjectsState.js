import React, { useReducer } from "react";
import {
  SET_PROJECTS_FROM_FB,
  ADD_NEW_PROJECT,
  DELETE_PROJECT,
} from "./projects-actions";
import ProjectsContext from "./projects-context";
import projectsAllIdsReducer from "./projectsAllIds-reducer";
import projectsByIdReducer from "./projectsById-reducer";

const ProjectsState = (props) => {
  const initialProjectsAllIdsState = [];
  const initialProjectsByIdState = null;

  const [projectsById, dispatchProjectsById] = useReducer(
    projectsByIdReducer,
    initialProjectsByIdState
  );
  const [projectsAllIds, dispatchProjectsAllIds] = useReducer(
    projectsAllIdsReducer,
    initialProjectsAllIdsState
  );

  const setProjectsAllIdsFromFBtoState = (projectsIds) => {
    dispatchProjectsAllIds({
      type: SET_PROJECTS_FROM_FB,
      payload: projectsIds,
    });
  };

  const setProjectsByIdFromFBtoState = (project) => {
    dispatchProjectsById({
      type: SET_PROJECTS_FROM_FB,
      payload: project,
    });
  };

  const addProjectToState = (project) => {
    dispatchProjectsAllIds({
      type: ADD_NEW_PROJECT,
      payload: project,
    });

    dispatchProjectsById({
      type: ADD_NEW_PROJECT,
      payload: project,
    });
  };

  const updateProject = (updatedProject) => {
    dispatchProjectsById({
      type: ADD_NEW_PROJECT,
      payload: updatedProject,
    });
  };

  const deleteProject = (project) => {
    dispatchProjectsById({
      type: DELETE_PROJECT,
      payload: project,
    });

    dispatchProjectsAllIds({
      type: DELETE_PROJECT,
      payload: project,
    });
  };

  return (
    <ProjectsContext.Provider
      value={{
        projectsById,
        projectsAllIds,
        setProjectsAllIdsFromFBtoState,
        setProjectsByIdFromFBtoState,
        addProjectToState,
        deleteProject,
        updateProject,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsState;
