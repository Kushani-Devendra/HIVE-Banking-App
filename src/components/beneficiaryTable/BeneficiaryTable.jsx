import React from "react";
import SecondaryButton from "../secondaryButton/SecondaryButton";
import PropTypes from "prop-types";

const BeneficiaryTable = ({ beneficiaries, handleDelete }) => {
  const renderAccountNumber = (accNumber) => {
    const lastFourDigits = accNumber.slice(-4);
    const asterisks = "*".repeat(accNumber.length - 4);
    const formattedAccountNumber = `${asterisks}${lastFourDigits}`;
    return formattedAccountNumber;
  };

  return (
    <>
      <table className="mt-2">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Beneficiary Name & Account Number</th>
            <th>Added Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {beneficiaries &&
            beneficiaries.map(
              (beneficiary) => (
                <tr key={beneficiary.id}>
                  <td>{beneficiary.id}</td>
                  <td>
                    {beneficiary.name} &nbsp;
                    {renderAccountNumber(beneficiary.accNumber)}
                  </td>
                  <td>{beneficiary.addedOn}</td>
                  <td>
                    <SecondaryButton
                      onClick={() => handleDelete(beneficiary.id)}
                    >
                      Delete
                    </SecondaryButton>
                  </td>
                </tr>
              )
              // )
            )}
        </tbody>
      </table>
    </>
  );
};

export default BeneficiaryTable;

BeneficiaryTable.propTypes = {
  // beneficiaries: PropTypes.string,
  handleDelete: PropTypes.func,
};
