import React from 'react'

import { Form, Button, Alert} from 'react-bootstrap'


export default props => {
    const renderList = () => {
        if(props.radioList[0]){
            const list = props.radioList || []
        const expression = list.map((radio, index) => {
            return <Form.Check
                
                key={radio[0]}
                type="radio"
                label={radio[0]}
                name="companyRadio"
                value={radio[1]}
                id={index}
                onChange={props.handleChange}/>
        })
        expression.splice(0,0,(list[0] == undefined) ? [] :(<Form.Label key ="title">Selecionar Unidade</Form.Label>))
        return expression
        }else{
            return
        }
        
    }
    

    return (
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
            <Form.Group controlId="signupRadios">
                    {renderList()}
            </Form.Group>
            <Form.Group>
                <Alert show={props.isVisible} variant='danger'>{props.message}</Alert>
                <Button onClick={props.handleSignup}>Cadastrar</Button>
            </Form.Group>
        </Form>
    )
}