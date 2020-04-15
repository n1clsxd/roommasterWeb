import React from 'react'

import { Form, Button, Alert} from 'react-bootstrap'


export default props => (
    <Form>

        <Form.Group controlId="signupEmail">
            <Form.Label>Email do Usuário</Form.Label>
            <Form.Control
                name="signupEmail"
                onChange={props.handleChange}
                onClick={props.handleChange}
                type="email"
                placeholder="employee@company.com"
                value={props.email} />
        </Form.Group>

        <Form.Group controlId="signupName">
            <Form.Label>Nome do Usuário</Form.Label>
            <Form.Control
                name="signupName"
                onChange={props.handleChange}
                onClick={props.handleChange}
                placeholder="Ben Hoomann"
                value={props.name} />
        </Form.Group>

        <Form.Group controlId="signupPassword">
            <Form.Label>Nova Senha</Form.Label>
            <Form.Control
                name="signupPassword"
                onChange={props.handleChange}
                onClick={props.handleChange}
                type="password"
                placeholder="p455w0rd"
                value={props.password} />
        </Form.Group>

        <Form.Group>
            <Alert show={props.isVisible} variant='danger'>{props.message}</Alert>
            <Button onClick={props.handleSignup}>Cadastrar</Button>
        </Form.Group>
    </Form>
)