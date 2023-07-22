import React, { useState } from "react";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import TextBox from "../../components/textBox/TextBox";
import Title from "../../components/title/Title";
import Alert from "../../components/alert/Alert";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Link from "../../components/link/Link";

const CreateBeneficiary = () => {
  const currentDate = new Date().toLocaleDateString();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [accNumber, setAccNumber] = useState("");
  // const [addedOn, setAddedOn] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let beneficiarytDetails = {
      id,
      name,
      accNumber,
      addedOn: currentDate,
    };
    fetch("http://localhost:3001/beneficiaries", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(beneficiarytDetails),
    })
      .then((res) => {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          navigate("/beneficiaries");
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
            message="Beneficiary was created successfully"
          />
        )}

        <Title title="Create Beneficiary" />
        <div className="create-account-card">
          <div className="fs-15">
            <p>
              To create a beneficiary, please enter the details in the form.
              Then click "Create Beneficiary".
            </p>
            <div className="mt-1">
              <p>
                <strong>Note: </strong>Please ensure the details are correct.
                Once a beneficiary is added, their details cannot be changed. If
                the details entered is incorrect, please delete the beneficiary
                and add it again.
              </p>
            </div>
          </div>

          <form className="mt-2" onSubmit={handleSubmit}>
            <div className="flex-column gap--5">
              <div>
                <TextBox
                  type="text"
                  label="Full Name *"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                  min="5000"
                />
              </div>
              <div>
                <TextBox
                  type="number"
                  label="Account Number *"
                  value={accNumber}
                  onChange={(e) => {
                    setAccNumber(e.target.value);
                  }}
                  required
                  minLength={12}
                />
              </div>
            </div>
            <PrimaryButton className="mt-2 mb-1" type="submit">
              Create Beneficiary
            </PrimaryButton>
            <br />
            <Link navigate="/beneficiaries">View Beneficiaries</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateBeneficiary;

// [Help needed] - How to pass default values to objects with JSON-server POST request?
