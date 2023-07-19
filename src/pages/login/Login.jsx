import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/users?username=${username}`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log(resp);
        if (Object.keys(resp).length === 0) {
          console.log("Username is invalid");
        } else {
          if (resp.password === password) {
            navigate("/");
          } else {
            console.log("Invalid credentials");
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container">
      <form className="card" onSubmit={handleSubmit}>
        <h2 className="card-header">Sign In</h2>
        <div className="card-body">
          {/* <div className="input-container">
              <input
                className="input-box"
                value={id}
                onChange={(e) => {
                  setId(uid);
                }}
                hidden
              />
            </div> */}
          <div className="input-container">
            <label className="input-label">Username *</label>
            <input
              className="input-box"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </div>
          <div className="input-container">
            <label className="input-label">Password *</label>
            <input
              type="password"
              className="input-box"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="card-footer">
          <PrimaryButton type="submit">Login</PrimaryButton>
          <p className="mt-1 link-sm">
            Don't have an account? <Link to={"/register"}>Register here</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
