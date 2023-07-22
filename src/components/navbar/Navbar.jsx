import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SecondaryButton from "../secondaryButton/SecondaryButton";

const Navbar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="navbar flex-between">
      <div className="logo-section">
        <Link to={"/"}>
          <img
            className="logo"
            src="../../assets/bank-logo.png"
            alt="bank logo"
          />
        </Link>
      </div>
      <div className="link-section flex-between">
        <div id="links" className="links flex-between">
          <NavLink
            className="nav-link"
            to={"/"}
            style={({ isActive }) => {
              return {
                borderBottom: isActive && "2.2px solid  #4683eb",
                color: isActive ? "#4683eb" : "#494749",
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            Home
          </NavLink>

          <div className="dropdown">
            <button className="dropbtn">
              Transactions <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <NavLink
                className="nav-link"
                to={"/savings-transactions"}
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive && "2.2px solid  #4683eb",
                    color: isActive ? "#4683eb" : "#494749",
                    fontWeight: isActive ? "bold" : "",
                  };
                }}
              >
                Savings Account
              </NavLink>
              <NavLink
                className="nav-link"
                to={"/current-transactions"}
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive && "2.2px solid  #4683eb",
                    color: isActive ? "#4683eb" : "#494749",
                    fontWeight: isActive ? "bold" : "",
                  };
                }}
              >
                Current Account
              </NavLink>
              <NavLink
                className="nav-link"
                to={"/fixed-transactions"}
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive && "2.2px solid  #4683eb",
                    color: isActive ? "#4683eb" : "#494749",
                    fontWeight: isActive ? "bold" : "",
                  };
                }}
              >
                Fixed Account
              </NavLink>
              <NavLink
                className="nav-link"
                to={"/recurring-transactions"}
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive && "2.2px solid  #4683eb",
                    color: isActive ? "#4683eb" : "#494749",
                    fontWeight: isActive ? "bold" : "",
                  };
                }}
              >
                Recurring Account
              </NavLink>
            </div>
          </div>

          <NavLink
            className="nav-link"
            to={"/beneficiaries"}
            style={({ isActive }) => {
              return {
                borderBottom: isActive && "2.2px solid  #4683eb",
                color: isActive ? "#4683eb" : "#494749",
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            Beneficiaries
          </NavLink>
        </div>
        <div className="logout">
          <SecondaryButton
            className="btn-link"
            onClick={() => navigate("/login")}
          >
            Logout
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
