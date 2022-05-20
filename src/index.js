import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/components.css';
import App from './App';
import Nav from './components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
