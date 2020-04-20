import React from 'react'
import { BrowserRouter, Route, Redirect} from 'react-router-dom'

import Login from '../components/user/login/Login'
import Signup from '../components/user/signup/Signup'

import CreateCompany from  '../components/company/CreateCompany'
import Main from '../components/main/Main'
export default props => (
    <BrowserRouter>

        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/newcompany' component={CreateCompany} /> 
        <Route path='/main' component={Main} />
        {/* <Redirect from='*' to='/login' /> */}
    </BrowserRouter>
)