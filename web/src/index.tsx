import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // esse code injeta uma estrutura dentro do codigo html
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
