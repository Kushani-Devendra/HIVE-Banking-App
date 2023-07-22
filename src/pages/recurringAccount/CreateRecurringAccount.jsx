import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/alert/Alert";
import TextBox from "../../components/textBox/TextBox";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import SelectPeriod from "../../components/select/SelectPeriod";

const CreateRecurringAccount = () => {
  const accountNumber = Math.floor(
    Math.random() * (999999999999 - 100000000000) + 100000000000
  ).toString();

  const [id, setId] = useState("");
  const [period, setPeriod] = useState("");
  const [availableBalance, setAvailableBalance] = useState("");

  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let accountDetails = {
      id,
      accType: "Recurring",
      period,
      accNumber: accountNumber,
      availableBalance,
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
            message="Recurring account opened successfully"
            redirectMsg="Redirecting to home page..."
          />
        )}

        <h2>Create Recurring Account</h2>
        <div className="create-account-card">
          <div className="fs-15">
            <p>
              To open a Recurring Account, please enter the details in the form.
              Then click "Open Account".
            </p>

            <div className="mt-1">
              <p>
                <strong>Note: </strong>Please ensure the details are correct.
                Interst will be applied as below.
              </p>

              <ul className="mt-1 ml-1">
                <li>Period: 3 months | Interest - 2%</li>
                <li>Period: 6 months | Interest - 6%</li>
                <li>Period: 9 months | Interest - 8%</li>
              </ul>
            </div>
          </div>

          <form className="mt-2" onSubmit={handleSubmit}>
            <div className="flex-column gap--5">
              <div>
                <SelectPeriod
                  id="period"
                  label="Select Period *"
                  setPeriod={(e) => {
                    setPeriod(e.target.value);
                  }}
                />
              </div>
              <div>
                <TextBox
                  type="number"
                  label="Deposit Amount *"
                  value={availableBalance}
                  onChange={(e) => {
                    setAvailableBalance(e.target.value);
                  }}
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

export default CreateRecurringAccount;
