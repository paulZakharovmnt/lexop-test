import database from "../firebase";

const fetchProjectsAllIds = (user) => {
  return database
    .collection("users")
    .doc(user.uid)
    .collection("userData")
    .doc("listOfProjects");
};

export default fetchProjectsAllIds;
