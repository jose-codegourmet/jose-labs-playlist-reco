import { omit } from "lodash";
import React from "react";
import type { FC } from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  label: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const { label } = props;
  return (
    <button className="btn btn-primary btn-md" {...omit(props, ["label"])}>
      {label}
    </button>
  );
};
