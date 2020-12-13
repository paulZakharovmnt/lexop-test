import React, { useReducer } from "react";
import AuthContext from "./auth-context";
import authReducer from "./auth-reducer";
import { SET_LOGGEDIN_USER, LOGOUT_USER } from "./auth-actions";

const AuthState = (props) => {
  const initialUser = "";

  const [state, dispatch] = useReducer(authReducer, initialUser);

  const setLoggedInUser = (user) => {
    dispatch({
      type: SET_LOGGEDIN_USER,
      payload: user,
    });
  };

  const logoutUser = () => {
    dispatch({
      type: LOGOUT_USER,
      payload: "",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state,
        setLoggedInUser,
        logoutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
