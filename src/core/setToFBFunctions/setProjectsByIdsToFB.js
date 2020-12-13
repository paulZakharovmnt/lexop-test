import database from "../firebase";

const setProjectsByIdToFB = (user, listOfProjectsById) => {
  database
    .collection("users")
    .doc(user.uid)
    .collection("userData")
    .doc("projectsInfo")
    .set(listOfProjectsById);
};

export default setProjectsByIdToFB;
