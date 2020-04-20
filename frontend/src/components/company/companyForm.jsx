import React from 'react'
import { Form, Row, Col, Button, Alert } from 'react-bootstrap'


export default props => (
    <Form>
        <Row>
            <Form.Group as={Col} controlId="companyName">
                <Form.Label>Nome da Empresa</Form.Label>
                <Form.Control name ='newCompanyName' type="text" placeholder="Company Ltda." onChange={props.handleChange}></Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="companyDomain">
                <Form.Label>Domínio da Empresa</Form.Label>
                <Form.Control name ='newCompanyDomain' type="text" placeholder="company.com" onChange={props.handleChange}></Form.Control>
            </Form.Group>
        </Row>

        <Form.Group controlId="firstAdminName">
            <Form.Label>Nome do Administrador</Form.Label>
            <Form.Control name ='newCompanyAdminName' type="text" placeholder="Hooman Bean" onChange={props.handleChange}></Form.Control>
        </Form.Group>

        <Form.Group controlId="firstAdminEmail">
            <Form.Label>Email do Administrador</Form.Label>
            <Form.Control name ='newCompanyAdminEmail' type="email" placeholder="hbean@company.com" onChange={props.handleChange}></Form.Control>
        </Form.Group>

        <Form.Group controlId="firstAdminPassword">
            <Form.Label>Nova Senha</Form.Label>
            <Form.Control name ='newCompanyAdminPassword' type="password" placeholder="1break4bl3p4ss" onChange={props.handleChange}></Form.Control>
        </Form.Group>

        <Form.Group>
        <Alert show={props.alert.isVisible} variant={props.alert.variant}>{props.alert.text}</Alert>
            <Button onClick={props.handleNewCompany}>Submit</Button>
        </Form.Group>
    </Form>
)