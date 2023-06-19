import React from 'react';
import { Screen } from 'entities/Screen';
import { Buttons } from 'features/Buttons';
import cls from './Calculator.module.scss';

const Calculator = () => {

  return (
    <div className={cls.calculatorWrapper}>
      <Screen />
      <Buttons />
    </div>
  );
};

export default Calculator;