import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Root from '../src/Root';
import Nav from './components/UI/Nav';
import App from './components/App';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Student from './components/Student';
import Scheduler from './components/Scheduler';
import Billing from './components/Billing';
import Session from './components/Session';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <App>
                <Route path='/' exact component={Signup} />
                <Route path='/(student|scheduler|billing)/' component={Nav} />
                <Route path='/signin' component={Signin} />
                <Route path='/student/:id' component={Student} />
                <Route path='/session/:id' component={Session} />
                <Route path='/scheduler/:id' component={Scheduler} /> 
                <Route path='/billing' component={Billing} />   
            </App>
        </BrowserRouter>
    </Root>
, document.getElementById('root'));
registerServiceWorker();
