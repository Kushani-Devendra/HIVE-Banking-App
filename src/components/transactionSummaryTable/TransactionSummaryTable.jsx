import React, { useEffect, useState } from "react";

const TransactionSummaryTable = ({ accountType }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/transactions")
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setTransactions(Object.values(result).pop());
      });
  }, []);

  return (
    <>
      <table className="flex-start gap-0">
        <thead className="table-2-head">
          <tr className="table-2-row flex-column gap-0">
            <th>Transaction ID</th>
            <th>Transaction Type</th>
            <th>Beneficiary Details</th>
            <th>Transfer Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="table-2-body">
          {transactions && (
            <tr key={transactions.id} className="table-2-row flex-column gap-0">
              <td>{transactions.id}</td>
              <td>{transactions.accType}</td>
              <td>{transactions.beneficiaryDetails}</td>
              <td>{transactions.amount}</td>
              <td>{transactions.status}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TransactionSummaryTable;
