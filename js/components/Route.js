import React from 'react';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';

import Index from './Index';
import RegisterForm from './RegisterForm';
import LoginStatus from './LoginStatus';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Index} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/logon" component={LoginStatus} />
    </Router>
);

export default router;