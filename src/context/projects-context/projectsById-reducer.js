import {
  SET_PROJECTS_FROM_FB,
  ADD_NEW_PROJECT,
  DELETE_PROJECT,
} from "./projects-actions";
import deleteSelectedJobInfoFromList from "../../core/deleteSelectedProjectFromList";

export const projectsByIdReducer = (state, action) => {
  switch (action.type) {
    case SET_PROJECTS_FROM_FB:
      return action.payload;

    case ADD_NEW_PROJECT:
      const projectsByIdCopy = { ...state };
      projectsByIdCopy[action.payload.title] = action.payload;
      return projectsByIdCopy;

    case DELETE_PROJECT:
      const projectsByIdWithoutDeletedCompany = deleteSelectedJobInfoFromList(
        state,
        action.payload.title
      );
      return projectsByIdWithoutDeletedCompany;

    default:
      return state;
  }
};

export default projectsByIdReducer;
