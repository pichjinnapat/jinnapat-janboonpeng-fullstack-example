import React, { FC } from "react";

type ButtonProps = {
  isSquare?: boolean;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: FC<ButtonProps> = ({ isSquare = true, ...props }) => {
  return (
    <button
      className={`text-sm sm:p-4 xs:text-xl select-none ${
        isSquare ? "aspect-square" : ""
      } bg-slate-600 hover:bg-blue-500 active:bg-blue-700 duration-200 ease-in-out`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
