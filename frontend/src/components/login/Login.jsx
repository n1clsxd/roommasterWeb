import React, { Component } from 'react'

import axios from 'axios'
import LoginForm from './LoginForm'

const URL = 'http://localhost:8086/user'
export default class Company extends Component {
    constructor(props) {
        super(props)
        this.state = { loginEmail: "", loginPassword: "" }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleLogin() {
        const header = {
            email: this.state.loginEmail,
            password: this.state.loginPassword
        }
        console.log("tentando login com: " + header.email + " e " + header.password)
        axios.get(`${URL}/login`, { headers: header })
        .then(response => {
            console.log(response.data[0])
        }).catch(e => {
            console.log("Erro: " + e)
        })
    }
    handleChange(e,field) {
        console.log(e.target.value)
        this.setState({...this.state, [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <LoginForm
                    email={this.state.loginEmail}
                    password={this.state.loginPassword}
                    handleChange={this.handleChange}
                    handleLogin={this.handleLogin} />
            </div>
        )
    }
}