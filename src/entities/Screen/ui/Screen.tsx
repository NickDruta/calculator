import React from 'react';
import cls from './Screen.module.scss';

const Screen = () => {

  return (
    <div className={cls.screenWrapper}>
      <p className={cls.screenText}>0</p>
    </div>
  );
};

export default Screen;