import React from "react";
import { buttons } from "../config/config";
import { Button } from "shared/Button";
import cls from './Buttons.module.scss';

const Buttons = () => {
  return (
    <div className={cls.buttonsWrapper}>
      {buttons.map((button) => (
        <Button description={button.description} type={button.type} />
      ))}
    </div>
  );
};

export default Buttons;
