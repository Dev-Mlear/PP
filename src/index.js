import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
