import database from "../firebase";

const setProjectsAllIdsToFB = (user, projectsAllIdsList) => {
  database
    .collection("users")
    .doc(user.uid)
    .collection("userData")
    .doc("listOfProjects")
    .set({ projectsAllIdsList });
};

export default setProjectsAllIdsToFB;
