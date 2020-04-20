import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import LoginForm from './LoginForm'


const URL = 'http://localhost:8086/user'
export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loginEmail: "",
            loginPassword: "",
            redirect: "",

            alert: {
                isVisible: false,
                text: "",
                variant: ""
            }
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleAlert(message, variant) {
        this.setState({
            alert: {
                isVisible: true,
                text: message,
                variant: variant
            }
        })

    }
    handleLogin() {
        const header = {
            email: this.state.loginEmail,
            password: this.state.loginPassword
        }
        if (header.email == "" || header.password == "") {
            this.handleAlert("Os campos de email e senha devem ser preenchidos.")
        } else {
            axios.get(`${URL}/login`, { headers: header })
                .then(response => {
                    console.log(response.data[0])
                    if (response.data[0]){
                        this.setState({ redirect: "/main" })
                    }else{
                        this.handleAlert("Usuário não encontrado, verifique os campos e tente novamente.")
                    }

                }).catch(e => {
                    console.log("Erro: " + e)
                })
        }


    }
    handleChange(e) {
        console.log(e.target.name)
        this.setState({ ...this.state, [e.target.name]: e.target.value, alert: { isVisible: false } })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <h1>Login</h1>
                <LoginForm
                    email={this.state.loginEmail}
                    password={this.state.loginPassword}
                    handleChange={this.handleChange}
                    handleLogin={this.handleLogin}
                    isVisible={this.state.alert.isVisible}
                    message={this.state.alert.text}
                    variant={this.state.alert.variant}
                />
            </div>
        )
    }
}