import React, { Component } from 'react';
import Slide from './Slide';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './Card';
import '../CSS/Home.css';

export default class Menu extends Component{
    render() {
        return (
            <div>
                <div className="fluid-container">
                    <Slide/>
                </div>
                <Jumbotron fluid className='jumbotronHome'>
                    <Container>
                        <h1>Escolha o evento que mais se encaixa no seu bolso</h1>
                        <p>
                        Nosso sistema cada vez mais cresce em números de colaboradores, faça a melhor para você, entre nossos colaboradores.
                        </p>
                    </Container>
                </Jumbotron>;
                <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Card imagem = 'https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_311,h_388/v1551810899/assets/90/f22172-66af-49f5-84b5-a55d2295d3b0/original/uber_business.svg' titulo='Escolha o evento que mais se encaixa no seu bolso' descricao='Nosso sistema cada vez mais cresce em números de colaboradores, faça a melhor para você entre nossos colaboradores.'/>
                    </Col>
                    <Col xs={6} md={4}>
                        <Card imagem = 'https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_311,h_388/v1551810833/assets/ae/8f7bcf-86c6-4c8e-8fdb-03341eb3d4cb/original/uber_eats.svg' titulo='Veja opções de cardápio com agilidade' descricao='Com alguns cliques você pode comparar as opções de vários bares na sua região, além de realizar pedidos.'/>
                    </Col>
                    <Col xs={6} md={4}>
                        <Card imagem= 'https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_311,h_388/v1551810899/assets/90/f22172-66af-49f5-84b5-a55d2295d3b0/original/uber_business.svg' titulo='Economize com descontos com alguns cliques' descricao='Você pode fazer economias escolhendo as promoções que mais te atende, pegue seu cupom de desconto.'/>
                    </Col>
                </Row>
                </Container>;
            </div>
        );
    }
}