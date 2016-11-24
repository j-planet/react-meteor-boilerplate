import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import HomePage from './components/home_page';
import SubPage from './components/sub_page';
import UserProfile from './components/users/user_profile';


const routes = (
    <Router history={browserHistory} >
        <Route path="/" component={ App } >

            <IndexRoute component={ HomePage } />

            <Route path="stuff/:stuffId" component={ SubPage } />
            <Route path="profile" component={UserProfile} />
        </Route>
    </Router>
);

export default routes;