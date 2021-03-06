import React from 'react';
import ReactDOM from 'react-dom';
import '@material/react-text-field/dist/text-field.css';
import '@material/react-material-icon/dist/material-icon.css';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from './App';
//import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <App />
    </Provider> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
