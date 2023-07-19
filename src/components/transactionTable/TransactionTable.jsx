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

// [Help needed] - How to display filtered data in a reused table component?

// I'm coding a banking app with React and json-server. I have a json object with some transaction data, like so
// db.json
//   "transactions": [
//     {
//       "id": 1,
//       "accType": "Current",
//       "date": "12/07/2023",
//       "description": "Virtusa salary credit - T443545",
//       "beneficiaryAccNumner": "",
//       "type": "credit",
//       "amount": "36000.00",
//       "status": "Success"
//     },
//     {
//       "id": 4,
//       "accType": "Savings",
//       "date": "12/07/2023",
//       "description": "Virtusa salary credit - T443545",
//       "type": "credit",
//       "amount": "62000.00"
//     },
//     more...
//  ],

// The transactions details fetched inside a <TransactionTable/> component.  I've used this table in two different pages called  CurrentTransactions and  SavingsTransactions.
// Right now, the tables inside both pages return all the transactions. But I want to check the account type and display the savings and current transactions separately in the pages. How can I achieve this?
// TransactionTable.jsx
// import React, { useEffect, useState } from "react";

// const TransactionTable = ({}) => {
//   const [transactions, setTransactions] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:3001/transactions")
//       .then((data) => {
//         return data.json();
//       })
//       .then((result) => {
//         setTransactions(result);
//       });
//   }, []);

//   return (
//     <>
//       <table className="mt-1">
//         <thead>
//           <th>Sr. No.</th>
//           <th>Date</th>
//           <th>Transaction</th>
//           <th>Type</th>
//           <th>Amount</th>
//         </thead>
//         <tbody>
//           {transactions &&
//             transactions.map(
//               (transaction) => (
//                 // transactions.accType === "Savings" && (
//                 <tr key={transaction.id}>
//                   <td>{transaction.id}</td>
//                   <td>{transaction.date}</td>
//                   <td>
//                     {transaction.description}
//                     {transaction.beneficiaryAccNumner}
//                   </td>
//                   <td>{transaction.type}</td>
//                   <td>{transaction.amount}</td>
//                 </tr>
//               )
//               // )
//             )}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default TransactionTable;

// CurrentTransactions.jsx
// import React from "react";
// import Navbar from "../../components/navbar/Navbar";
// import TransactionTable from "../../components/transactionTable/TransactionTable";
// import Title from "../../components/title/Title";

// const CurrentTransactions = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="main-container">
//         <Title title="Current Account Transactions" />
//         <TransactionTable />
//       </div>
//     </>
//   );
// };

// export default CurrentTransactions;

// SavingsTransactions.jsx
// import React from "react";
// import Navbar from "../../components/navbar/Navbar";
// import TransactionTable from "../../components/transactionTable/TransactionTable";
// import Title from "../../components/title/Title";

// const SavingsTransactions = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="main-container">
//         <Title title="Savings Account Transactions" />
//         <TransactionTable />
//       </div>
//     </>
//   );
// };

// export default SavingsTransactions;
