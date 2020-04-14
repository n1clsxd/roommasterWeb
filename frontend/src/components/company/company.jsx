import React, { Component } from 'react'

import CompanyForm from './companyForm'

export default class Company extends Component {
    render() {
        return (
            <div>
                <h1>Cadastrar Nova Empresa</h1>
                <CompanyForm/>
            </div>
        )
    }
}