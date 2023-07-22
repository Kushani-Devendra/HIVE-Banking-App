import React from "react";
import PropTypes from "prop-types";

const SelectBeneficiary = ({
  label,
  className,
  beneficiaries,
  setBeneficiary,
  ...props
}) => {
  const renderAccountNumber = (accNumber) => {
    const lastFourDigits = accNumber.slice(-4);
    const asterisks = "*".repeat(accNumber.length - 4);
    const formattedAccountNumber = `${asterisks}${lastFourDigits}`;
    return formattedAccountNumber;
  };

  return (
    <>
      <label className="input-label">{label}</label>
      <select
        className={`input-box ${className}`}
        onChange={setBeneficiary}
        required
        {...props}
      >
        <option value="" readonly>
          Select Beneficiary
        </option>

        {beneficiaries &&
          beneficiaries.map((beneficiary) => (
            <option
              key={beneficiary.id}
              value={
                beneficiary.name +
                " " +
                renderAccountNumber(beneficiary.accNumber)
              }
            >
              {beneficiary.name} {renderAccountNumber(beneficiary.accNumber)}
            </option>
          ))}
      </select>
    </>
  );
};

export default SelectBeneficiary;

SelectBeneficiary.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  beneficiaries: PropTypes.array,
  setBeneficiary: PropTypes.func,
};
