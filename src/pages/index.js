import React from 'react';
import Home from '../components/Home';
import Detail from '../components/Detail';
import Dashboard from '../components/Dashboard';
import Collections from '../components/Collections';
import Follow from '../components/Follow';
import Upload from '../components/Upload';
import Profile from "../components/Profile";
import ChangePassword from '../components/ChangePassword';
import Login from '../components/Login';
import Example from '../components/Example';

import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

const Pages = () => {
    // react router dom way
    const search = useLocation().search;
    const name = new URLSearchParams(search).get('name');
    const id = new URLSearchParams(search).get('id');
    const location = useLocation();
    
    // JS way
    const url = window.location.href;
    const param = window.location.pathname;

    console.log(name, id, param, location.pathname );

    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/product" component={Detail} />
            <Route path="/upload" component={Upload} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/collections" component={Collections} exact />
            <Route path="/follow" component={Follow} exact />
            <Route path="/profile" component={Profile} exact />
            <Route path="/change_password" component={ChangePassword} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/example" component={Example} exact />
        </Switch>
       
    )
}

export default Pages
