import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from './components/router';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
//registerServiceWorker();
