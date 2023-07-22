import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const TransactionTable = ({ accountType }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/transactions")
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setTransactions(result);
      });
  }, []);

  return (
    <>
      <table className="mt-2">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Date</th>
            <th>Transaction</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions
              .filter((transaction) => transaction.accType === accountType)
              .map(
                (transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.id}</td>
                    <td>{transaction.date}</td>
                    <td>
                      {transaction.description} &nbsp;
                      {transaction.beneficiaryDetails}
                    </td>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                  </tr>
                )
                // )
              )}
        </tbody>
      </table>
    </>
  );
};

export default TransactionTable;

TransactionTable.propTypes = {
  accType: PropTypes.string,
};
