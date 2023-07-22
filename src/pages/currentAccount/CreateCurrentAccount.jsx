import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/alert/Alert";
import Title from "../../components/title/Title";
import TextBox from "../../components/textBox/TextBox";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";

const CreateCurrentAccount = () => {
  const accountNumber = Math.floor(
    Math.random() * (999999999999 - 100000000000) + 100000000000
  ).toString();

  const [id, setId] = useState("");
  const [availableBalance, setAvailableBalance] = useState("");

  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let accountDetails = {
      id,
      accType: "Current",
      accNumber: accountNumber,
      availableBalance,
      currentBalance: availableBalance,
      totalHolds: "00.00",
      currency: "LKR",
    };
    fetch("http://localhost:3001/accounts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(accountDetails),
    })
      .then((res) => {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          navigate("/");
        }, 3000);
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
            message="Current account opened successfully"
            redirectMsg="Redirecting to home page..."
          />
        )}

        <Title title="Create Current Account" />
        <div className="create-account-card">
          <div>
            <p className="fs-15">
              To open a Current Account, please enter the details in the form.
              Then click "Open Account".
            </p>
          </div>

          <form className="mt-2" onSubmit={handleSubmit}>
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

export default CreateCurrentAccount;
