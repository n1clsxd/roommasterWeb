import React from 'react'

import { Form, Button } from 'react-bootstrap'


export default props => (
    <Form>

        <Form.Group controlId="loginEmail">
            <Form.Label>Email do Usuário</Form.Label>
            <Form.Control
                name="loginEmail"
                onChange={props.handleChange}
                type="email"
                placeholder="employee@company.com"
                value={props.email} />
        </Form.Group>

        <Form.Group controlId="loginPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
                name="loginPassword"
                onChange={props.handleChange}
                type="password"
                placeholder="p455w0rd"
                value={props.password} />
        </Form.Group>

        <Form.Group>
            <Button onClick={props.handleLogin}>Entrar</Button>
        </Form.Group>

        <Form.Group>
            <Button>Novo Usuário</Button>
        </Form.Group>
    </Form>
)