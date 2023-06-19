import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainWrapper } from './app/MainWrapper';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainWrapper />
  </React.StrictMode>
);