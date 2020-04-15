import React from 'react'
import { BrowserRouter, Route, Redirect} from 'react-router-dom'

import Login from '../components/login/Login'
import Main from '../components/main/Main'
export default props => (
    <BrowserRouter>

        <Route path='/login' component={Login} />
        <Route path='/main' component={Main} />
        <Redirect from='*' to='/login' />
    </BrowserRouter>
)