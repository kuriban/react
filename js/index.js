import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRoute, browserHistory } from 'react-router';

import SubmitForm from './components/SubmitForm';
import RegisterForm from './components/RegisterForm';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={SubmitForm} />
        <Route path="/register" component={RegisterForm} />

    </Router>
);

ReactDOM.render(
    router,
    document.getElementById('app')
);



