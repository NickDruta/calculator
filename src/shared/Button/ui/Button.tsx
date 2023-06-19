import React from "react";
import clsx from "clsx";
import cls from "./Button.module.scss";

interface Props {
  description: string;
  type?: string;
}

const Button = ({ description, type = "number" }: Props) => {
  return (
    <div
      className={clsx(
        cls.buttonWrapper,
        type === "operator" && cls.primary,
        type === "action" && cls.secondary
      )}
    >
      {description}
    </div>
  );
};

export default Button;
