import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

/*Función flecha*/
const Caroussel = () => {
    return (
        <Carousel
            infinite
            arrows
        >
            <img src={"/img/sind.jpg"} height={"80%"} width={"100%"}/>
            <img src={"/img/partes.jpg"} height={"80%"} width={"100%"}/>
            <img src={"/img/sin.jpg"} height={"80%"} width={"100%"}/>
            <img src={"/img/dalt.png"} height={"80%"} width={"100%"}/>
        </Carousel>
    )
};

export default Caroussel;