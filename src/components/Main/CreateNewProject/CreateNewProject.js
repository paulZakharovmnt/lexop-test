import React, { useState } from "react";
import "./CreateNewProject.css";
import { listOfStatuses } from "../../../core/listOfStatuses";

const CreateNewProject = ({
  handleAddProjectToListSubmit,
  setCreateNewProject,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [dateCreated, setDateCreated] = useState(null);
  const [estimatedLevelOfEfford, setEstimatedLevelOfEfford] = useState(null);
  const [currentLevelOfEfford, setCurrentLevelOfEfford] = useState(null);

  const clearAllInputs = () => {
    setTitle("");
    setDescription("");
    setStatus("");
    setDateCreated(null);
    setEstimatedLevelOfEfford(null);
    setCurrentLevelOfEfford(null);
  };

  const submitUserInputs = (event) => {
    event.preventDefault();
    const projectId = Math.floor(Math.random() * 1000);
    const newProject = {
      title,
      description,
      status,
      dateCreated,
      estimatedLevelOfEfford,
      currentLevelOfEfford,
      projectId,
      comments: {},
    };
    handleAddProjectToListSubmit(newProject);
    clearAllInputs();
    setCreateNewProject(false);
  };
  return (
    <div className="create-project-container">
      <h2>Create New Project</h2>

      <form className="create-project-form" onSubmit={submitUserInputs}>
        <div className="inputs-container">
          <div className="left-side-inputs">
            <input
              className="create-project-input"
              placeholder="Title"
              onChange={(event) => setTitle(event.target.value)}
              required
            />
            <input
              className="create-project-input"
              type="date"
              onChange={(event) => setDateCreated(event.target.value)}
            />
            <input
              className="create-project-input"
              placeholder="estimated effort"
              type="number"
              onChange={(event) =>
                setEstimatedLevelOfEfford(event.target.value)
              }
            />
            <input
              className="create-project-input"
              placeholder="current effort"
              type="number"
              onChange={(event) => setCurrentLevelOfEfford(event.target.value)}
            />
            <select
              className="selector"
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value="">-- Project Status -- </option>
              {listOfStatuses.map((status) => (
                <option key={status + 1} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
          <div className="right-side-inputs">
            <textarea
              rows="24"
              cols="46"
              placeholder="Description"
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
        </div>
        <input type="submit" value="Submit" className="submit-btn btn" />
      </form>
    </div>
  );
};

export default CreateNewProject;
