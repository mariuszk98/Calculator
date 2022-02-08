import React from "react";

const CalcInput = ({ operation, calc }) => {
  return (
    <button
      onClick={() => {
        calc(operation);
      }}
    >
      {operation}
    </button>
  );
};

export default CalcInput;
