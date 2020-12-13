import React, { useState, useEffect, useContext } from "react";
import { fire } from "../../core/firebase";
import Login from "./Login";
import AuthContext from "../../context/auth-context/auth-context";
import setDefaultFoldersToFB from "../../core/setToFBFunctions/setDefaultFoldersToFB";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [hasAccount, setHasAccount] = useState(false);

  const { setLoggedInUser, logoutUser } = useContext(AuthContext);

  const clearAllInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)

      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
            return;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()

      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        setDefaultFoldersToFB(result.user.uid);
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default:
            return;
        }
      });
  };

  useEffect(() => {
    const removeEventListener = fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearAllInputs();
        setLoggedInUser({
          email: user.email,
          uid: user.uid,
        });
      } else {
        logoutUser();
      }
    });

    return removeEventListener;
  }, [setLoggedInUser, logoutUser]);

  return (
    <Login
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      setEmail={setEmail}
      setPassword={setPassword}
      handleSignUp={handleSignUp}
      handleLogin={handleLogin}
      emailError={emailError}
      passwordError={passwordError}
    />
  );
};

export default Auth;
