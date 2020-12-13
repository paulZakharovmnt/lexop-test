import React from "react";
import "./Login.css";

const Login = ({
  hasAccount,
  setHasAccount,
  setEmail,
  setPassword,
  emailError,
  passwordError,
  handleSignUp,
  handleLogin,
}) => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login">
          {hasAccount ? <h2>Sign In</h2> : <h2>Sign Up</h2>}

          <input
            placeholder="email"
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
          {emailError && <p>Error Email Message</p>}

          <input
            placeholder="password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          {passwordError && <p>Error Password Message</p>}

          {hasAccount ? (
            <div className="signin-container">
              <div className="login-btn btn" onClick={() => handleLogin()}>
                Sign In
              </div>
              <div className="has-account">
                <p>Do you need an account?</p>
                <div onClick={() => setHasAccount(false)}>Register</div>
              </div>
            </div>
          ) : (
            <div className="signin-container">
              <div className="login-btn btn" onClick={() => handleSignUp()}>
                Sign Up
              </div>
              <div className="has-account">
                <p>Already has an account?</p>
                <div onClick={() => setHasAccount(true)}>Sign In </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
