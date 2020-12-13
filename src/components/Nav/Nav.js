import React, { useContext } from "react";
import "./Nav.css";
import { fire } from "../../core/firebase";
import AuthContext from "../../context/auth-context/auth-context";

const Nav = ({ createNewProject, setCreateNewProject, setUser }) => {
  const { logoutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    fire.auth().signOut();
    logoutUser();
  };
  return (
    <div className="nav">
      <div className="nav-container-left">
        <h2> Home Improvement</h2>
        <div
          className="new-project-btn btn"
          onClick={() => setCreateNewProject(!createNewProject)}
        >
          New Project
        </div>
      </div>
      <div className="nav-container-right">
        <div className="logout-btn btn" onClick={handleLogOut}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Nav;
