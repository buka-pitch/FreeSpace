import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../pages/Login.css";

function Register() {
  const navigate = useNavigate();
  const EmailRef = React.useRef();
  const PasswordRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      `email: ${EmailRef.current.value.toString()}
            password: ${PasswordRef.current.value.toString()}
            `
    );
    navigate("/");
  }

  return (
    <div className="login-container">
      <div className="header back">
        <h1>
          <Link to="/">FreeSpace</Link>
        </h1>
      </div>
      <div className="layout">
        <div className="login-card-header">
          <h1 className="login-title">Register</h1>
        </div>
        <div className="form">
          <form
            action=""
            method="post"
            className="form-content"
            onSubmit={handleSubmit}
          >
            <div className="input-wrapper">
              <label htmlFor="username">Username *</label>
              <input
                type="username"
                name="username"
                id="username"
                className="inputField"
                required
                ref={EmailRef}
                placeholder="Username"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Email (optional)</label>
              <input
                type="email"
                name="email"
                id="email"
                className="inputField"
                ref={EmailRef}
                placeholder="example@email.com"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                name="password"
                id="password"
                ref={PasswordRef}
                required
                placeholder="Password"
              />
              <div className="input-wrapper">
                <input type="submit" value="Login" id="LoginBtn" />
              </div>
            </div>
            <Link
              to="/login"
              style={{
                color: "#000",
                fontSize: "small",
                backgroundColor: "lightgray",
                padding: "10px",
                margin: "10px",
                borderRadius: "15px",
              }}
            >
              <p>Login if youre a registered user</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
