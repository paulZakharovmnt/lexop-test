import React from "react";
import "./DeleteProjectModal.css";

const DeleteProjectModal = ({
  setShowDeleteModal,
  handleDeleteProjectClick,
  projectInfo,
}) => {
  return (
    <div className="black-layout">
      <div className="delete-modal">
        <h3>A you sure you want do delete {projectInfo.title}?</h3>
        <div className="confim-btns-container">
          <div
            onClick={() => handleDeleteProjectClick(projectInfo)}
            className="yes-btn btn"
          >
            {" "}
            Yes{" "}
          </div>
          <div onClick={() => setShowDeleteModal(false)} className="no-btn btn">
            No
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProjectModal;
