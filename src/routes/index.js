import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import LoginPage from '../components/login';
import Registerpage from '../components/register';
import Dashboardpage from '../components/dashboard';

const NoMatch = ({ location }) => (
    <div>
        <h3>
            <Redirect
                to={{
                    pathname: '/',
                }}
            />
        </h3>
    </div>
);
export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/register" exact component={Registerpage} />
            <Route path="/dashboard" exact component={Dashboardpage} />
            <Route component={NoMatch} />
        </Switch>
    </BrowserRouter>
);