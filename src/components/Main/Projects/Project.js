import React, { useCallback, useEffect, useState, useContext } from "react";
import "./Project.css";
import classNames from "classnames";
import getCurrentCommentTime from "../../../core/getCurrentCommentTime";
import Comments from "../Comments/Comments";
import DeleteProjectModal from "./DeleteProjectModal";
import StatusSelector from "../StatusSelector";
import AuthContext from "../../../context/auth-context/auth-context";

const Project = ({
  project,
  projectsById,
  handleUpdateProject,
  handleDeleteProjectClick,
}) => {
  const [changeProjectStatus, setChangeProjectStatus] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [newProjectStatus, setNewProjectStatus] = useState("");
  const [newCommentInProjectInput, setNewCommentInProjectInput] = useState("");

  const { user } = useContext(AuthContext);

  const projectInfo = projectsById[project];

  const handleUpdateProjectStatus = useCallback(() => {
    let projectCopy = { ...projectInfo };
    projectCopy.status = newProjectStatus;
    handleUpdateProject(projectCopy);
    setChangeProjectStatus(false);
    setNewProjectStatus("");
  }, [handleUpdateProject, projectInfo, newProjectStatus]);

  const addNewCommentToProject = () => {
    const commentTime = getCurrentCommentTime();
    let projectCopy = projectInfo;
    projectCopy.comments[commentTime] = newCommentInProjectInput;
    handleUpdateProject(projectCopy);
  };

  useEffect(() => {
    if (!newProjectStatus) {
      return;
    }
    handleUpdateProjectStatus();
  }, [newProjectStatus, handleUpdateProjectStatus]);

  const projectStatusClasses = classNames("project-status", {
    completed: projectInfo.status === "Completed",
    stopped: projectInfo.status === "Stopped",
    started: projectInfo.status === "Started",
  });

  const actualEffortClasses = classNames("actual-effort", {
    lowEffort:
      projectInfo.estimatedLevelOfEfford > projectInfo.currentLevelOfEfford,
    highEffort:
      projectInfo.estimatedLevelOfEfford < projectInfo.currentLevelOfEfford,
  });

  return (
    <div className="project">
      <div className="project-header">
        <h2>{projectInfo.title}</h2>
        <div className="delete-project">
          <div
            className="delete-project-btn btn"
            onClick={() => setShowDeleteModal(true)}
          >
            Delete
          </div>
        </div>
        <div className="project-status-container">
          {!changeProjectStatus ? (
            <div
              className={projectStatusClasses}
              onClick={() => setChangeProjectStatus(!changeProjectStatus)}
            >
              {projectInfo.status}
            </div>
          ) : (
            <StatusSelector setNewProjectStatus={setNewProjectStatus} />
          )}
        </div>
      </div>
      <div className="project-basic-container">
        <div className="project-author-container">
          <div className="project-author">
            <i className="icons fas fa-user-alt" />
            <div>{user.email}</div>
          </div>
          <div className="project-date">
            <i className="icons far fa-clock" />
            <div>{projectInfo.dateCreated}</div>
          </div>
        </div>
        <div className="project-info">
          <div className="project-text">
            <p>{projectInfo.description}</p>
          </div>
          <div className="project-effort-container">
            <div className="estimates-effort">
              <p>Estimated level of effort</p>
              <h2>{projectInfo.estimatedLevelOfEfford}</h2>
            </div>
            <div className={actualEffortClasses}>
              <p>Actual level of effort</p>
              <h2>{projectInfo.currentLevelOfEfford}</h2>
            </div>
          </div>
        </div>
      </div>
      <Comments
        addNewCommentToProject={addNewCommentToProject}
        projectInfo={projectInfo}
        setNewCommentInProjectInput={setNewCommentInProjectInput}
      />
      {showDeleteModal && (
        <DeleteProjectModal
          handleDeleteProjectClick={handleDeleteProjectClick}
          setShowDeleteModal={setShowDeleteModal}
          projectInfo={projectInfo}
        />
      )}
    </div>
  );
};

export default Project;
