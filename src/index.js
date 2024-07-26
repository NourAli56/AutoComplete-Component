import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18n'
import App from './App';
import { BrowserRouter } from "react-router-dom"
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import store from './Redux/Store';
import { Provider } from "react-redux";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

