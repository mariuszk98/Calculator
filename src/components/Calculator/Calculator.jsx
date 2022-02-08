import React, { useState } from "react";
import CalcInput from "../CalcInput/CalcInput";

const Calculator = () => {
  const [resault, setResault] = useState();
  const [amountA, setAmountA] = useState();
  const [amountB, setAmountB] = useState();

  const onClick = (typeOfOperation) => {
    switch (typeOfOperation) {
      case "+": {
        setResault(amountA + amountB);
        break;
      }
      case "-": {
        setResault(amountA - amountB);
        break;
      }
      case "/": {
        setResault(amountA / amountB);
        break;
      }
      case "*": {
        setResault(amountA * amountB);
        break;
      }
    }
  };
  return (
    <div>
      <input
        type="number"
        placeholder="wpisz liczbe"
        onChange={(e) => {
          setAmountA(Number(e.target.value));
        }}
      />
      <input
        type="number"
        placeholder="wpisz liczbe"
        onChange={(e) => {
          setAmountB(Number(e.target.value));
        }}
      />
      <p>Wynik: {resault}</p>
      <CalcInput operation={"+"} calc={onClick} />
      <CalcInput operation={"-"} calc={onClick} />
      <CalcInput operation={"*"} calc={onClick} />
      <CalcInput operation={"/"} calc={onClick} />
    </div>
  );
};

export default Calculator;
