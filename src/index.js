import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import reportWebVitals from './reportWebVitals';
import AboutMe from './components/AboutMe.jsx';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
