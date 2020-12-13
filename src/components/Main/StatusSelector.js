import React from "react";
import { listOfStatuses } from "../../core/listOfStatuses";

const StatusSelector = ({ setNewProjectStatus }) => {
  return (
    <div className="status-selector">
      {listOfStatuses.map((status) => (
        <div
          className="project-status"
          onClick={() => setNewProjectStatus(status)}
          key={status}
        >
          {status}
        </div>
      ))}
    </div>
  );
};

export default StatusSelector;
