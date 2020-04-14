import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'


export default props => (
    <Form>
        <Row>
            <Form.Group as={Col} controlId="companyName">
                <Form.Label>Nome da Empresa</Form.Label>
                <Form.Control type="text" placeholder="Company Ltda."></Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="companyDomain">
                <Form.Label>Domínio da Empresa</Form.Label>
                <Form.Control type="text" placeholder="company.com"></Form.Control>
            </Form.Group>
        </Row>
        <Button>Adicionar Unidade</Button>


        <Form.Group ControlId="firstAdminName">
            <Form.Label>Nome do Administrador</Form.Label>
            <Form.Control type="text" placeholder="Hooman Bean"></Form.Control>
        </Form.Group>
        <Form.Group controlId="firstAdminEmail">
            <Form.Label>Email do Administrador</Form.Label>
            <Form.Control type="email" placeholder="hbean@company.com"></Form.Control>
        </Form.Group>
        <Form.Group controlId="firstAdminPassword">
            <Form.Label>Nova Senha</Form.Label>
            <Form.Control type="password" placeholder="1break4bl3p4ss"></Form.Control>
        </Form.Group>
        

        <Button>Submit</Button>
    </Form>
)