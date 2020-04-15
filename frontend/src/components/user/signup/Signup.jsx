import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import SignupForm from './SignupForm'

const URL = 'http://localhost:8086/user'
export default class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            signupEmail: "",
            signupPassword: "",
            signupName:"",
            redirect: "",

            alert: {
                isVisible: false,
                text: "",
                variant: ""
            }
        }
        this.handleSignup = this.handleSignup.bind(this)
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
    handleSignup() {

        let body = {
            "companyId": 1,
            "name": this.state.signupName,
            "email": this.state.signupEmail,
            "password": this.state.signupPassword
        }
        console.log(body)
        if (body.email == "" || body.password == "" || body.name == "") {
            
            this.handleAlert("Todos os campos devem ser preenchidos.")
        } else {
            let values = Object.values(body)
            axios.post(`${URL}/create`, body,{header:{'Content-Type' : 'application/json'}})
                .then(response => {
                    console.log(response.data)
                    if (response.data){
                        this.setState({ redirect: "/login" })
                    }else{
                        this.handleAlert("Nao foi possível realizar o cadastro, tente novamente")
                    }

                }).catch(e => {
                    console.log("Erro: " + e)
                })
        }


    }
    handleChange(e) {

        console.log(e.target.value)
        this.setState({ ...this.state, [e.target.name]: e.target.value, alert: { isVisible: false } })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <h1>Novo Usuário</h1>
                <SignupForm
                    email={this.state.signupEmail}
                    password={this.state.signupPassword}
                    name={this.state.signupName}
                    handleChange={this.handleChange}
                    handleSignup={this.handleSignup}
                    isVisible={this.state.alert.isVisible}
                    message={this.state.alert.text}
                    variant={this.state.alert.variant}

                />
                
            </div>
        )
    }
}