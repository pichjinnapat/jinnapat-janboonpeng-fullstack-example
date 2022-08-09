import React, { FC, useRef } from "react";
import { MAX_DIGITS } from "../utils/constants";

type ScreenProps = {
  value: string;
  currentOperator: string;
};

const Screen: FC<ScreenProps> = (props) => {
  const screenRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  return (
    <div
      ref={screenRef}
      className="h-15 xs:h-20 w-full mb-2 align-text-bottom grid content-end"
    >
      <div
        ref={textRef}
        className={`text-right text-lg sm:!text-50 xs:text-4xl`}
      >
        <div className="text-base mb-1">
          {props.currentOperator ? `( ${props.currentOperator} )` : ""}
        </div>
        {props.value.length > MAX_DIGITS
          ? Number(props.value).toExponential(7)
          : props.value}
      </div>
    </div>
  );
};

export default Screen;
