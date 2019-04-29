import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class Slide extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://www.quintana.bar/slider/images/02.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Slide Bar 1</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://www.quintana.bar/slider/images/02.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Slide Bar 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://www.quintana.bar/slider/images/02.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Slide Bar 3</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}