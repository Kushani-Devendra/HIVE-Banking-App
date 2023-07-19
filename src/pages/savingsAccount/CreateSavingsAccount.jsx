import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import TextBox from "../../components/textBox/TextBox";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/alert/Alert";

const CreateSavingsAccount = () => {
  const accountNumber = Math.floor(
    Math.random() * (999999999999 - 100000000000) + 100000000000
  ).toString();

  const [id, setId] = useState("");
  const [accType, setAccType] = useState("Savings");
  const [accDesc, setAccDesc] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates voluptas"
  );
  const [accNumber, setAccNumber] = useState(accountNumber);
  const [availableBalance, setAvailableBalance] = useState("");
  const [currentBalance, setCurrentBalance] = useState("00.00");
  const [totalHolds, setTotalHolds] = useState("00.00");
  const [currency, setCurrency] = useState("LKR");

  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleCLoseAlert = () => {
    setShowAlert(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let accountDetails = {
      id,
      accType,
      accDesc,
      accNumber,
      availableBalance,
      currentBalance,
      totalHolds,
      currency,
    };
    fetch("http://localhost:3001/accounts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(accountDetails),
    })
      .then((res) => {
        setShowAlert(true);
        console.log("Savings account opened successfilly");
        setInterval(() => {
          navigate("/");
        }, 5000);
      })

      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Navbar />
      <div className="main-container">
        {showAlert && (
          <Alert
            bgColor="alert-bg-light-green"
            textColor="alert-text-dark-green"
            message="Savings account opened successfilly"
            showAlert={showAlert}
            handleCLoseAlert={handleCLoseAlert}
          />
        )}

        <h2>Create Savings Account</h2>
        <div className="create-account-card">
          <div>
            <p className="fs-15">
              To open a Savings Account, please enter the details in the form.
              Then click "Open Account".
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex-column">
              <div>
                <TextBox
                  type="number"
                  label="Deposit Amount *"
                  value={availableBalance}
                  onChange={(e) => {
                    setAvailableBalance(e.target.value);
                  }}
                  required
                  min="5000"
                />
              </div>
            </div>
            <PrimaryButton className="mt-1" type="submit">
              Open Account
            </PrimaryButton>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateSavingsAccount;
