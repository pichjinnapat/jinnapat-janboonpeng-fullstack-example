import React, { FC } from "react";
import Button from "./common/Button";

type NumberPadProps = {
  onChange?: (value: string) => void;
};

type NumButton = {
  label: string;
  length?: 2 | 3 | 4;
};

const NumberPad: FC<NumberPadProps> = (props) => {
  const btnNum: NumButton[][] = [
    [{ label: "AC", length: 3 }, { label: "÷" }],
    [{ label: "1" }, { label: "2" }, { label: "3" }, { label: "×" }],
    [{ label: "4" }, { label: "5" }, { label: "6" }, { label: "-" }],
    [{ label: "7" }, { label: "8" }, { label: "9" }, { label: "+" }],
    [{ label: "0" }, { label: "=", length: 3 }],
  ];

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (props.onChange) props.onChange(event.currentTarget.value);
  };

  return (
    <div className="grid grid-cols-4 gap-1 xs:gap-2">
      {btnNum.flat().map((btn) => {
        switch (btn.length) {
          case 2:
            return (
              <div key={btn.label} className="col-span-2 grid grid-col-1">
                <Button
                  isSquare={false}
                  onClick={handleClick}
                  value={btn.label}
                >
                  {btn.label}
                </Button>
              </div>
            );
          case 3:
            return (
              <div key={btn.label} className="col-span-3 grid grid-col-1">
                <Button
                  isSquare={false}
                  onClick={handleClick}
                  value={btn.label}
                >
                  {btn.label}
                </Button>
              </div>
            );
          case 4:
            return (
              <div key={btn.label} className="col-span-4 grid grid-col-1">
                <Button
                  isSquare={false}
                  onClick={handleClick}
                  value={btn.label}
                >
                  {btn.label}
                </Button>
              </div>
            );
          default:
            return (
              <Button key={btn.label} onClick={handleClick} value={btn.label}>
                {btn.label}
              </Button>
            );
        }
      })}
    </div>
  );
};

export default NumberPad;
