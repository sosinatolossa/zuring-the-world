import Carousel from 'react-bootstrap/Carousel'
import React from "react"
import { Route } from "react-router-dom"

export const WelcomePage = () => {
    return (
        <>
            <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="images/ethiopia2.jpeg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="images/GorgeousSidetownsinItaly__Positano_shutterstock.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="images/ethiopia3.jpeg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

            <h1 className="project-name">Zurīng the World</h1>
        </>
    )
}
