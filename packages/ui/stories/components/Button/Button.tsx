import { omit } from "lodash";
import React from "react";
import type { FC } from "react";
import cn from "classnames";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  label: string;
  btnType?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const { label, btnType, className = "" } = props;
  return (
    <button
      className={cn(`btn btn-md ${className}`, {
        [`btn-${btnType}`]: btnType !== "",
      })}
      {...omit(props, ["label", "className"])}
    >
      {label}
    </button>
  );
};
