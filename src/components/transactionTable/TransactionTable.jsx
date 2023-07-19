import React, { useEffect, useState } from "react";

const TransactionTable = ({}) => {
  const [transactions, setTransactions] = useState(null);

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
      <table className="mt-1">
        <thead>
          <th>Sr. No.</th>
          <th>Date</th>
          <th>Transaction</th>
          <th>Type</th>
          <th>Amount</th>
        </thead>
        <tbody>
          {transactions &&
            transactions.map(
              (transaction) => (
                // transactions.accType === "Savings" && (
                <tr key={transaction.id}>
                  <td>{transaction.id}</td>
                  <td>{transaction.date}</td>
                  <td>
                    {transaction.description}
                    {transaction.beneficiaryAccNumner}
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
