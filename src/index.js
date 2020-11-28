import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GlobalWrapper from './GlobalContext';

ReactDOM.render(
  <React.StrictMode>
    <GlobalWrapper>
      <App />
    </GlobalWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
