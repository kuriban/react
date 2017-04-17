import React from 'react';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';

import Index from './Index';
import RegisterForm from './RegisterForm';
import Cabinet from './Cabinet';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Index} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/cabinet" component={Cabinet} />
    </Router>
);

export default router;