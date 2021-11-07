import React from 'react';
import ReactDOM from 'react-dom';
import './SCSS/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';


// ! ==> bootstrap <==
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
//! ==> fontawesome <==
import '@fortawesome/fontawesome-free/css/all.min.css' 


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


