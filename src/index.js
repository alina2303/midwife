import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'));
