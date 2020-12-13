import database from "../firebase";

const setDefaultFoldersToFB = (userId) => {
  database
    .collection("users")
    .doc(userId)
    .collection("userData")
    .doc("projectsInfo")
    .set({});
  database
    .collection("users")
    .doc(userId)
    .collection("userData")
    .doc("listOfProjects")
    .set({});
};

export default setDefaultFoldersToFB;
