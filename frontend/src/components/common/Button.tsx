import React, { FC } from "react";

type ButtonProps = {
  isSquare?: boolean;
  isHighlighted?: boolean;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: FC<ButtonProps> = ({
  isSquare = true,
  isHighlighted = false,
  ...props
}) => {
  return (
    <button
      className={`text-sm sm:p-4 xs:text-2xl select-none ${
        isSquare ? "aspect-square" : ""
      } ${
        isHighlighted
          ? "bg-amber-600 hover:bg-amber-700 active:bg-amber-800 font-bold"
          : "bg-slate-600 hover:bg-blue-500 active:bg-blue-700"
      } duration-200 ease-in-out`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
