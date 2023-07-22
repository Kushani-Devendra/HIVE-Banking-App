import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Title from "../../components/title/Title";
import TransactionTable from "../../components/transactionTable/TransactionTable";

const RecurringTransactions = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Title title="Recurring Account Transactions" />
        <TransactionTable accountType="Recurring" />
      </div>
    </>
  );
};

export default RecurringTransactions;
