import React from "react";
import cls from "./Screen.module.scss";

interface Props {
  text: number;
}

const Screen = ({ text }: Props) => {
  return (
    <div className={cls.screenWrapper}>
      <p className={cls.screenText}>{text}</p>
    </div>
  );
};

export default Screen;
