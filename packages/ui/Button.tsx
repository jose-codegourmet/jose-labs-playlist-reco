import { omit } from "lodash";
import React from "react";
import type { FC } from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  label: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const { label, className = "" } = props;
  return (
    <button
      className={`btn btn-primary btn-md ${className}`}
      {...omit(props, ["label"])}
    >
      {label}
    </button>
  );
};
