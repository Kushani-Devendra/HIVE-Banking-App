import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import TextBox from "../../components/textBox/TextBox";
import Alert from "../../components/alert/Alert";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3001/users/${username}`)
      .then((res) => {
        console.log(res.id);

        return res.json();
      })
      .then((resp) => {
        console.log(resp);
        if (Object.keys(resp).length === 0) {
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
        } else {
          if (resp.password === password) {
            sessionStorage.setItem("username", username);
            navigate("/");
          } else {
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false);
            }, 3000);
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container">
      {showAlert && (
        <Alert
          bgColor="alert-bg-light-red"
          textColor="alert-text-dark-red"
          message="Invalid username or password."
        />
      )}
      <form className="card" onSubmit={handleSubmit}>
        <h2 className="card-header">Sign In</h2>
        <div className="card-body">
          <div className="input-container">
            <TextBox
              label="Username *"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
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
              required
            />
          </div>
        </div>
        <div className="card-footer">
          <PrimaryButton
            type="submit"
            // onClick={handleLogin}
          >
            Login
          </PrimaryButton>
          <p className="mt-1 link-sm">
            Don't have an account? <Link to={"/register"}>Register here</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
