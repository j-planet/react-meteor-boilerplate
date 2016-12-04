import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import HomePage from './components/home_page';
import VerifyEmailToken from './components/authentication/verify_email_token';


const routes = (
    <Router history={browserHistory} >
        <Route path="/" component={ App } >
            <IndexRoute component={ HomePage } />
            <Route path="verify-email/:token" component={ VerifyEmailToken } />
        </Route>
    </Router>
);

export default routes;