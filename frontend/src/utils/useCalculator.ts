import { useState } from "react";
import { MAX_DIGITS } from "./constants";

export const useCalculator = () => {
  const [value, setValue] = useState({
    num: "0",
    result: "0",
  });
  const [opr, setOpr] = useState("");

  const setResult = () => {
    if (value.num && value.result) {
      // eslint-disable-next-line no-eval
      const result = eval(
        `${value.result} ${opr === "×" ? "*" : opr === "÷" ? "/" : opr} ${
          value.num
        }`
      );

      setOpr("");

      setValue({
        num: "0",
        result: String(result.toFixed(6)),
      });
    }
  };

  const setNumber = (number: string) => {
    if (number !== "0" || (number === "0" && value.num !== "0")) {
      setValue((curr) => ({
        ...curr,
        num:
          curr.num.length >= MAX_DIGITS
            ? curr.num
            : curr.num !== "0"
            ? curr.num + number
            : number,
      }));
    } else {
      setValue((curr) => ({ ...curr, num: "0" }));
    }
  };

  const setClear = () => {
    setValue({
      num: "0",
      result: "0",
    });
    setOpr("");
  };

  const setOperator = (operatorBtn: string) => {
    setOpr(operatorBtn);

    if (Number(value.num) && Number(value.result)) {
      switch (opr) {
        case "+":
          setValue((curr) => ({
            num: "0",
            result: String((Number(curr.result) + Number(curr.num)).toFixed(6)),
          }));
          break;
        case "-":
          setValue((curr) => ({
            num: "0",
            result: String((Number(curr.result) - Number(curr.num)).toFixed(6)),
          }));
          break;
        case "×":
          setValue((curr) => ({
            num: "0",
            result: String((Number(curr.result) * Number(curr.num)).toFixed(6)),
          }));
          break;
        case "÷":
          setValue((curr) => ({
            num: "0",
            result: String((Number(curr.result) / Number(curr.num)).toFixed(6)),
          }));
          break;
        default:
          break;
      }
    } else {
      setValue((curr) => ({
        num: "0",
        result: String(curr.result !== "0" ? curr.result : curr.num),
      }));
    }
  };

  return {
    value,
    operator: opr,
    setClear,
    setNumber,
    setOperator,
    setResult,
  } as const;
};
