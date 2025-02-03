import React from 'react';
import {Carousel} from 'react-bootstrap';
import './Carrossel.css'


import foto1 from './imagens/casal1.jpg'
import foto2 from './imagens/cafe2.jpeg'
import foto3 from './imagens/cafe1.jpeg'

function ImageCarousel(){
    return(
        <Carousel interval={4000}>
            <Carousel.Item>
                <img
                   className="d-block w-100"
                   src={foto1}
                   alt="Primeira imagem"
                />
                <Carousel.Caption>
                    <h3>Felipe e Clara</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={foto2}
                    alt="Segunda imagem"
                />
                <Carousel.Caption>
                    <h3>Nossas delícias</h3>
                </Carousel.Caption> 
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={foto3}
                    alt="Terceira imagem"
                />
                <Carousel.Caption>
                    <h3>Nosso espaço</h3>
                </Carousel.Caption>    
            </Carousel.Item>
        </Carousel>
    )
}

export default ImageCarousel;
