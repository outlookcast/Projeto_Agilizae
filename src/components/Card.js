import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

export default class Cartao extends Component {
    render () {
        return (
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.imagem}/>
                <Card.Body>
                    <Card.Title>{this.props.titulo}</Card.Title>
                    <Card.Text>
                        {this.props.descricao}
                    </Card.Text>
                </Card.Body>
                </Card>
        );
    }
}
