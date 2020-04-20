import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import CompanyForm from './CompanyForm'

export default class CreateCompany extends Component {

    constructor(props) {
        super(props)
        this.state = {

            newCompanyName: "",
            newCompanyDomain: "",
            newCompanyAdminName: "",
            newCompanyAdminEmail: "",
            newCompanyAdminPassword: "",


            alert: {
                isVisible: false,
                text: "",
                variant: ""
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleNewCompany = this.handleNewCompany.bind(this)
    }
    getDomains() {
        
        let domain = this.state.newCompanyDomain
        /////////////////////////////////
        axios.get('http://localhost:8086/company/byDomain', { headers: { domain: domain } })
            .then(response => {
                console.log((response.data))
                console.log(response.data[0] == undefined)
                return(response.data == [])

            }).catch(e => {
                console.log("Erro: " + e)
            })
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

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
            alert: { isVisible: false },
        })
        if(e.target.name == "newCompanyDomain"){
            this.handleAlert(
                this.getDomains() ? "Dominio ja cadastrado!" : "Dominio valido!",
                this.getDomains() ? 'danger' : 'success')
        }
    }
    
    handleNewCompany() {
        let companyBody = {
            "name": this.state.newCompanyName,
            "domain": this.state.newCompanyDomain,
        }
        if(companyBody.name != "" && companyBody.domain != ""){
            console.log(companyBody)
        } 

        //post
    }

    render() {
        return (
            <CompanyForm
                alert={this.state.alert}
                handleChange={this.handleChange}
                handleNewCompany={this.handleNewCompany}
            />

        )
    }
}