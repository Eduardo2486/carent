import React from 'react';
import ReactDOM from 'react-dom';

import  {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './state/store';

import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
