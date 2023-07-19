import React, { Fragment, useEffect, useState } from "react";
import TransactionButton from "../transactionButton/TransactionButton";
import TransferButton from "../transferButton/TransferButton";

const AccountCards = () => {
  const [accounts, setAccounts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/accounts")
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setAccounts(result);
      });
  }, []);

  return (
    <Fragment>
      {accounts &&
        accounts
          .slice(0)
          .reverse()
          .map((account) => (
            <div key={account.id} className="account-card">
              <div className="account-card-header">
                {account && (
                  <>
                    <div className="flex-between">
                      <h4 className="account-card-number">
                        {account.accNumber}
                      </h4>
                      <div className="account-icon-set flex-between">
                        <TransactionButton accType={account.accType} />
                        {account.accType === "Current" ||
                        account.accType === "Savings" ? (
                          <TransferButton accType={account.accType} />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="account-card-content">
                      <div className="">
                        <div>
                          <h2 className="teal">
                            {account.currency} {account.availableBalance}
                          </h2>
                          <p className="fs-14">Available Balance</p>
                        </div>
                        {account.accType === "Current" ||
                        account.accType === "Savings" ? (
                          <div>
                            <div className="mt-1">
                              <p className="fs-14">
                                Current Balance &nbsp;
                                <span className="teal">
                                  {account.currency} {account.currentBalance}
                                </span>
                              </p>
                              <p className="fs-14 mt--5">
                                Total Holds &nbsp;
                                <span className="teal">
                                  {account.currency} {account.totalHolds}
                                </span>
                              </p>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="account-card-body flex-between">
                <div>
                  <h4>{account.accType} Account</h4>
                  <p className="account-card-desc">{account.accDesc}</p>
                </div>
              </div>
            </div>
          ))}
    </Fragment>
  );
};

export default AccountCards;
