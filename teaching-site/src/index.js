import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import Signup from './components/Signup';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route path='/signup' component={Signup} />    
        </App>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
