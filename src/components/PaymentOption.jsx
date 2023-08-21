import React from 'react';

const PaymentOption = ({ option, selected, onSelect }) => {
  return (
    <label className="flex items-center mb-2 cursor-pointer">
      <input
        type="radio"
        name="paymentOption"
        value={option}
        checked={selected === option}
        onChange={() => onSelect(option)}
        className="mr-2"
      />
      {option}
    </label>
  );
};

export default PaymentOption;
