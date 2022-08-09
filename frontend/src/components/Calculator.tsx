import React, { FC } from "react";
import { useCalculator } from "../utils/useCalculator";
import NumberPad from "./NumberPad";
import Screen from "./Screen";

const Calculator: FC = () => {
  const { value, operator, setClear, setNumber, setOperator, setResult } =
    useCalculator();

  const changeHandler = (key: string) => {
    if (key === "AC") setClear();
    else if (!isNaN(Number(key))) setNumber(key);
    else if (key === "=") setResult();
    else setOperator(key);
  };

  return (
    <div className="w-11/12 sm:w-96">
      <div className="w-11/12 m-auto">
        <Screen
          value={Number(value.num) ? value.num : value.result}
          currentOperator={operator}
        />
        <NumberPad onChange={changeHandler} />
      </div>
    </div>
  );
};

export default Calculator;
