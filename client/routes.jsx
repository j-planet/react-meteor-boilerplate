import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import IndexPageComponent from './components/IndexPageComponent';
import MainPageComponent from './components/MainPageComponent';
import UserProfile from './components/users/user_profile';


const routes = (
    <Router history={browserHistory} >
        <Route path="/" component={ App } >

            <IndexRoute component={ IndexPageComponent } />

            <Route path="stuff/:stuffId" component={ MainPageComponent } />
            <Route path="profile" component={UserProfile} />
        </Route>
    </Router>
);

export default routes;