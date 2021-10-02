import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.css';
import { AppProvider } from './context/Context';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);
