import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Root from '../src/Root';
import App from './components/App';
import Signup from './components/Signup';
import Signin from './components/Signin';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <App>
                <Route path='/' exact component={Signup} />
                <Route path='/signin' component={Signin} />    
            </App>
        </BrowserRouter>
    </Root>
, document.getElementById('root'));
registerServiceWorker();
