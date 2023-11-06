import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import './i18n';

import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>

      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider> 
      </BrowserRouter>
      
    </React.StrictMode>

);

reportWebVitals();
