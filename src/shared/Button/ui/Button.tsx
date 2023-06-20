import React from "react";
import clsx from "clsx";
import cls from "./Button.module.scss";

interface Props {
  description: string;
  onClick: (_: string) => void;
  type?: string;
}

const Button = ({ description, type = "number", onClick }: Props) => {
  return (
    <div
      onClick={() => onClick(description)}
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
