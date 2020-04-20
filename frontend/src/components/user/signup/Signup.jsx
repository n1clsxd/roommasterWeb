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
            signupName: "",
            signupCompany: undefined,
            redirect: "",

            alert: {
                isVisible: false,
                text: "",
                variant: ""
            },
            radioList: [],
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

        ////////////////
        let body = {
            "companyId": this.state.companyRadio,
            "name": this.state.signupName,
            "email": this.state.signupEmail,
            "password": this.state.signupPassword
        }
        console.log(body)
        if (body.email == "" || body.password == "" || body.name == "") {

            this.handleAlert("Todos os campos devem ser preenchidos.")


        } else {
            //this.handleAlert(body)
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
    getDomains() {
        
        let domain = this.state.signupEmail.split("@")
        /////////////////////////////////
        axios.get('http://localhost:8086/company/byDomain', { headers: { domain: domain[1] } })
            .then(response => {
                if (response.data[0]) {
                    let list = []
                    response.data.forEach((element, index) => {
                        console.log(element)
                        list.push([element.name,element.id])
                    });
                    this.setState({...this.state, radioList: list })
                } else {
                    this.setState({...this.state, radioList:[] })
                    this.handleAlert("Esse dominio nao esta cadastrado")
                }

            }).catch(e => {
                console.log("Erro: " + e)
            })
    }
    handleChange(e) {
        this.setState({...this.state, radioList: [] })
        if (e.target.name != "signupEmail") {
            this.getDomains()
        }

        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
            alert: { isVisible: false },

        })

    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        console.log(this.state.radioList.isVisible)
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
                    radioList={this.state.radioList}

                />

            </div>
        )
    }
}