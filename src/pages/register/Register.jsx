import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uid } from "uuid";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import Alert from "../../components/alert/Alert";
import TextBox from "../../components/textBox/TextBox";

const Register = () => {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const [showAlert, setShowAlert] = useState(false);

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
    let userDetails = { id, firstName, lastName, password };
    console.log(userDetails);

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userDetails),
    })
      .then((res) => {
        // console.log("Registered successfully");

        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          navigate("/login");
        }, 3000);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container">
      {showAlert && (
        <Alert
          bgColor="alert-bg-light-green"
          textColor="alert-text-dark-green"
          message="You were registered successfully"
        />
      )}
      <form className="card" onSubmit={handleSubmit}>
        <h2 className="card-header">Sign Up</h2>
        <div className="card-body">
          <div className="flex-container">
            <div className="flex-item">
              <TextBox
                type="text"
                label="First Name *"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
              />
            </div>
            <div className="flex-item">
              <TextBox
                type="text"
                label="Last Name *"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="input-container">
            <TextBox
              label="Username *"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
              required
            />
          </div>
          <div className="input-container">
            <TextBox
              type="password"
              label="Password *"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
              required
            />
            <div className="notice-container">
              <p className="fs-14">
                <strong>Note:</strong> Your password must contain minimum eight
                characters, at least one uppercase letter, one lowercase letter
                and one number:
              </p>
            </div>
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
