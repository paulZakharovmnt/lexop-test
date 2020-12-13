import database from "../firebase";
const fetchProjectsById = (user) => {
  return database
    .collection("users")
    .doc(user.uid)
    .collection("userData")
    .doc("projectsInfo");
};

export default fetchProjectsById;
