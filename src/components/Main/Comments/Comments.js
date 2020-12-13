import React, { useState } from "react";
import classNames from "classnames";
import "./Comments.css";

const Comments = ({
  projectInfo,
  setNewCommentInProjectInput,
  addNewCommentToProject,
}) => {
  const [showComments, setShowComments] = useState(false);

  const arrowClasses = classNames(
    "open-comments-icon",
    "fas",
    "fa-chevron-down",
    {
      commentsOpened: showComments,
    }
  );

  let comments = Object.entries(projectInfo.comments).map((CommentsArr) => {
    return (
      <div className="comment-info" key={CommentsArr[0]}>
        <div className="comment-date">
          <p>{CommentsArr[0]}</p>
        </div>
        <div className="comment-text">
          <p>{CommentsArr[1]}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="project-comments-container">
      <div className="project-comments-header">
        <h3>Comments</h3>
        <div
          className="open-comments-icon"
          onClick={() => setShowComments(!showComments)}
        >
          <i className={arrowClasses} />
        </div>
      </div>
      {showComments && (
        <div className="project-comments">
          <div className="comments-header">
            <h4>Date</h4>
            <h4>Comment:</h4>
          </div>

          {comments}

          <div className="new-comment-input">
            <input
              type="text"
              placeholder="Add new comment here"
              onChange={(event) =>
                setNewCommentInProjectInput(event.target.value)
              }
            />
            <div
              className=" btn add-comment-btn"
              onClick={addNewCommentToProject}
            >
              Add comment
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comments;
