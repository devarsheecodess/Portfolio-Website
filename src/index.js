import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>
);

reportWebVitals();