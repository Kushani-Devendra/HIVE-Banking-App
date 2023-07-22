import React, { useEffect, useState } from "react";
import TextBox from "../../components/textBox/TextBox";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import Alert from "../../components/alert/Alert";
import Navbar from "../../components/navbar/Navbar";
import Title from "../../components/title/Title";
import { useNavigate } from "react-router-dom";
import SelectBeneficiary from "../../components/select/SelectBeneficiary";

const CurrentTransfer = () => {
  const [id, setId] = useState("");
  const [beneficiaryDetails, setBeneficiaryDetails] = useState("");
  const [amount, setAmount] = useState("");
  const [beneficiaries, setBeneficiaries] = useState([]);

  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const currentDate = new Date().toLocaleDateString();

  // beneficiaries
  useEffect(() => {
    fetch("http://localhost:3001/beneficiaries")
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setBeneficiaries(result);
      });
  }, []);

  // transactions
  const handleSubmit = (e) => {
    e.preventDefault();
    let transactionDetails = {
      id,
      accType: "Current",
      date: currentDate,
      description: "Fund transfer",
      beneficiaryDetails,
      type: "debit",
      amount,
      status: "Success",
    };
    fetch("http://localhost:3001/transactions", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(transactionDetails),
    })
      .then((res) => {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          navigate("/current-transaction-summary");
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
            message="Fund transferred successfully"
          />
        )}

        <Title title="Current Account Fund Transfer" />
        <div className="create-account-card">
          <div className="fs-15">
            <p>
              You can use our fund transfer service to transfer funds from one
              account to another account instantly.
            </p>
            <p className="mt-1">
              Select a beneficiary from the dropdown below and enter the amount
              you want to transfer.
            </p>
            <p className="mt-1">
              Then click "Transfer Funds" to initiate the fund transfer process.
            </p>
          </div>

          <form className="mt-2" onSubmit={handleSubmit}>
            <div className="flex-column gap--5">
              <div>
                <SelectBeneficiary
                  id="beneficiary"
                  label="Select Beneficiary"
                  beneficiaries={beneficiaries}
                  setBeneficiary={(e) => {
                    setBeneficiaryDetails(e.target.value);
                  }}
                />
              </div>

              <div>
                <TextBox
                  type="number"
                  label="Transfer Amount *"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  required
                  min="100"
                />
              </div>
            </div>
            <PrimaryButton className="mt-1" type="submit">
              Transfer Funds
            </PrimaryButton>
          </form>
        </div>
      </div>
    </>
  );
};

export default CurrentTransfer;
