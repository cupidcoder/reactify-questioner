import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Store from './store/configure-store';
import App from './routes';
import './routes/index.css';
import './assets/stylesheet/toastify.css';

const store = Store();

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ToastContainer
      position='top-center'
      hideProgressBar
      closeButton={false}
      autoClose={3000}
    />
  </Provider>,
  document.getElementById('app')
);
