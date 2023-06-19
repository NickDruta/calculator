import React from 'react';
import { Calculator } from 'widgets/Calculator';
import cls from './MainWrapper.module.scss';

const MainWrapper = () => {

  return (
    <div className={cls.appWrapper}>
      <Calculator />
    </div>
  )
}

export default MainWrapper;