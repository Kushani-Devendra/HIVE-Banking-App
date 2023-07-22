import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Title from "../../components/title/Title";
import Alert from "../../components/alert/Alert";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";
import BeneficiaryTable from "../../components/beneficiaryTable/BeneficiaryTable";

const Beneficiaries = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [id, setId] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleNaviagate = () => {
    navigate("/beneficiaries/create-beneficiary");
  };

  // GET
  useEffect(() => {
    fetch("http://localhost:3001/beneficiaries")
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setBeneficiaries(result);
      });
  }, []);

  // DELETE
  const handleDelete = (id) => {
    fetch(`http://localhost:3001/beneficiaries/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        setBeneficiaries(
          beneficiaries.filter((beneficiary) => beneficiary.id !== id)
        );

        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
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
            message="Beneficiary deleted successfully"
          />
        )}
        <Title title="Beneficiaries" />
        <div className="flex-between mt-2">
          <p>
            To add a new beneficiary, click "Add New Beneficiary. Click "Delete"
            to delete beneficiaries.
          </p>
          <PrimaryButton onClick={handleNaviagate}>
            Add New Beneficiary
          </PrimaryButton>
        </div>
        <BeneficiaryTable
          handleDelete={handleDelete}
          beneficiaries={beneficiaries}
        />
      </div>
    </>
  );
};

export default Beneficiaries;
