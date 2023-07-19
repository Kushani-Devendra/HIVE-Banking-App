import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uid } from "uuid";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";

const Register = () => {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //   const isValidate = () => {
  //     let isProceed = true;
  //     let errorMessage = "This field is required*";
  //     if (firstName === null || firstName === "") {
  //       isProceed = false;
  //       errorMessage += "Please enter your first name*";
  //     }
  //     return isProceed;
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userDetails = { id, firstName, lastName, username, password };
    console.log(userDetails);

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userDetails),
    })
      .then((res) => {
        // toast message
        console.log("Registered successfilly");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container">
      <form className="card" onSubmit={handleSubmit}>
        <h2 className="card-header">Sign Up</h2>
        <div className="card-body">
          <div className="flex-container">
            <div className="flex-item">
              <label className="input-label">First Name *</label>
              <input
                className="input-box"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
              />
            </div>
            <div className="flex-item">
              <label className="input-label">Last Name *</label>
              <input
                className="input-box"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
              />
            </div>
          </div>
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
          <PrimaryButton type="submit">Register</PrimaryButton>
          <p className="mt-1 link-sm">
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
