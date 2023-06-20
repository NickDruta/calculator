import React from "react";
import { buttons } from "../config/config";
import { Button } from "shared/Button";
import cls from "./Buttons.module.scss";

interface Props {
  onClick: (_: string) => void;
}

const Buttons = ({ onClick }: Props) => {
  return (
    <div className={cls.buttonsWrapper}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          description={button.description}
          type={button.type}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default Buttons;
