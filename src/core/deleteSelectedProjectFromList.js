const deleteSelectedJobInfoFromList = (projectsList, project) => {
  return Object.keys(projectsList).reduce((obj, key) => {
    if (key !== project) {
      obj[key] = projectsList[key];
    }
    return obj;
  }, {});
};

export default deleteSelectedJobInfoFromList;
