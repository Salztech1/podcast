import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'))
root.render (
  <>
  
    <div>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    </div>
  </>,
  
)


