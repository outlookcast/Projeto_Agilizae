import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../CSS/FormularioCliente.css';

export default class FormularioCliente extends Component {
    render () {
        return (
            <div>
                <div className='linhaTop'></div>
                <div className='container formularioCliente'>
                    <Form>
                        <h1>Cadastre-se para participar do App</h1>
                        <p>Participe de todos os benefícios que oferecemos como descontos em diversos bares. <br/> Agilidade no pagamento com internet banking, agilidade em reservar mesas, agilidade em realizar pedidos.</p>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control placeholder="Rua, bairro, numero" />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>
                                Endereço 2
                            </Form.Label>
                            <Form.Control placeholder="Apartamento, Casa" />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridTelefone">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control type="number" placeholder="+55 (00) 0000-0000"></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCpf">
                                <Form.Label>CPF</Form.Label>
                                <Form.Control type="number"></Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control as="select">
                                <option>Escolha...</option>
                                <option>...</option>
                            </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>CEP</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Concordo com os termos de serviço" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Cadastrar
                        </Button>
                    </Form>
                </div>
                <div class="imagemBottom fluid-container">
                </div>
            </div>
        );
    }
}