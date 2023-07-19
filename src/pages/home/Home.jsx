import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SecondaryButton from "../../components/secondaryButton/SecondaryButton";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import AccountCards from "../../components/card/AccountCards";
import Title from "../../components/title/Title";

const Home = () => {
  const naviagte = useNavigate();

  const navigateToCurrent = () => {
    naviagte("/create-current");
  };
  const navigateToSavings = () => {
    naviagte("/create-savings");
  };
  const navigateToFixed = () => {
    naviagte("/create-fixed");
  };
  const navigateToRecurring = () => {
    naviagte("/create-recurring");
  };

  return (
    <>
      <Navbar />
      <div className="main-container">
        <Title title="Account Dashboard" firstname="" />
        <div className="card-outlined mt-2 ">
          <SecondaryButton
            className="flex-start btn-link"
            navigate={navigateToCurrent}
          >
            <AddCircleOutlineOutlined fontSize="small" />
            Current Account
          </SecondaryButton>
          <SecondaryButton
            className="flex-start btn-link"
            navigate={navigateToSavings}
          >
            <AddCircleOutlineOutlined fontSize="small" />
            Savings Account
          </SecondaryButton>
          <SecondaryButton
            className="flex-start btn-link"
            navigate={navigateToFixed}
          >
            <AddCircleOutlineOutlined fontSize="small" />
            Fixed Account
          </SecondaryButton>
          <SecondaryButton
            className="flex-start btn-link"
            navigate={navigateToRecurring}
          >
            <AddCircleOutlineOutlined fontSize="small" />
            Recurring Account
          </SecondaryButton>
        </div>
        <div className="account-cards mt-2 ">
          {/* ACCOUNT CARDS */}
          <AccountCards />
        </div>
      </div>
    </>
  );
};

export default Home;
