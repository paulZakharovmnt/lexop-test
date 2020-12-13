import {
  SET_PROJECTS_FROM_FB,
  ADD_NEW_PROJECT,
  DELETE_PROJECT,
} from "./projects-actions";

const projectsAllIdsReducer = (state, action) => {
  let updatedState;
  switch (action.type) {
    case SET_PROJECTS_FROM_FB:
      return action.payload;

    case ADD_NEW_PROJECT:
      updatedState = [...state, action.payload.title];
      return updatedState;

    case DELETE_PROJECT:
      updatedState = state.filter(
        (projectId) => projectId !== action.payload.title
      );
      return updatedState;

    default:
      return state;
  }
};

export default projectsAllIdsReducer;
