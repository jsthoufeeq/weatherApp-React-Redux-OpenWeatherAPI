import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
