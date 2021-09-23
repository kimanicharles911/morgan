import React from 'react';
import ReactDOM from 'react-dom';
/* I imported the open-source reset.css stylesheet to clear all browser default styles.
I imported the open-source normalize.css stylesheet to apply standardized browser CSS.
I imported the bootstrap styles for CSS and javascript plugins.
 */
import "./components/Reset.css";
import "./components/Normalize.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
