import React from "react";
import { Link, NavLink } from "react-router-dom";
import SecondaryButton from "../secondaryButton/SecondaryButton";

const Navbar = () => {
  return (
    <div className="navbar flex-between">
      <div className="logo-section">
        <img
          className="logo"
          src="../../assets/bank-logo.png"
          alt="bank logo"
        />
      </div>
      <div className="link-section flex-between">
        <div id="links" className="links flex-between">
          <NavLink
            className="nav-link"
            to={"/"}
            style={({ isActive }) => {
              return {
                borderBottom: isActive
                  ? "2.2px solid  #4683eb"
                  : "2.2px solid  #494749",
                color: isActive ? "#4683eb" : "#494749",
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            Home
          </NavLink>
          <NavLink
            className="nav-link"
            to={"/accounts"}
            style={({ isActive, isPending }) => {
              return {
                borderBottomColor: isActive ? "#4683eb" : "",
                color: isPending ? "#4683eb" : "#494749",
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            Accounts
          </NavLink>
          <NavLink
            className="nav-link"
            to={"/transactions"}
            style={({ isActive, isPending }) => {
              return {
                borderBottomColor: isActive ? "#4683eb" : "",
                color: isPending ? "#4683eb" : "#494749",
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            Transactions
          </NavLink>
        </div>
        <div className="logout">
          <SecondaryButton className="btn-link" to={"/login"}>
            Logout
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
