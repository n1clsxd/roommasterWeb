import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Login from '../components/login/Login'
export default props => (
    <Router history={hashHistory}>
        <Route path='/login' component={Login} />
        
        {/* <Redirect from='*' to='/todos' /> */}
    </Router>
)