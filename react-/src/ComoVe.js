import React from 'react';
import NabvarX from './Components/NabvarX';
import {Container} from '@material-ui/core'
import Contacto from './Components/Contacto';
import Comentarios from './Components/Comentarios';

import './C-Styles.css'

const ComoVe = (props) => {
    return (
        <div>
            <Container fixed>
                <header className="C-header">
                    <NabvarX/>
                </header>
                <body className={"C-body"}>
                <div className={"contenido"}>
                    <h1 className={"titulo"}>¿Cómo vemos?</h1>
                    <h3 className={"subtit"}>¿Cómo es que vemos?</h3>
                    <div className={"texto"}>
                        En los ojos, hay muchas partes diferentes que nos ayudan a crear la visión. La luz pasa a través de la córnea, que es la superficie transparente, en forma de cúpula, que cubre la parte delantera del ojo. La córnea desvía o refracta la luz que entra al ojo. El iris, la parte coloreada del ojo, regula el tamaño de la pupila, la abertura que controla la cantidad de luz que entra al ojo. Detrás de la pupila, está el cristalino, una parte transparente del ojo que enfoca aún más la luz o las imágenes en la retina. La retina es un tejido delgado, delicado, fotosensible, que contiene células "foto receptoras"; especial que transforma la luz en señales eléctricas. Estas señales eléctricas se siguen procesando y luego viajan desde la retina del ojo al cerebro a través del nervio óptico, un conjunto de alrededor de un millón de fibras nerviosas. "Vemos" con nuestro cerebro; los ojos recogen la información visual e inician este complejo proceso.
                        <img ref={"src/img/comv.jpg"}/>
                    </div>
                    <h3 className={"subtit"}>Funcionamiento</h3>
                    <div className={"texto"}>
                        El sentido de la vista en las personas tiene un funcionamiento complejo y necesita de dos elementos básicos: El ojo y el cerebro.

                        La luz es el tercer elemento más destacado en la visión. Sin ella somos incapaces de ver. Es la que penetra en nuestros ojos para que el cerebro forme la imagen.
                        <img ref={"src/img/comv.jpg"}/>
                    </div>
                    <h3 className={"subtit"}>Recorrido de la información</h3>
                    <div className={"texto"}>
                        Aquí están los siguientes pasos:
                        1.- La luz pasa a través de la córnea y llega a la pupila que se contrae o expande según su intensidad. La pupila será más pequeña cuanta más luz haya para evitar deslumbramientos.
                        En habitaciones o lugares en penumbra aumentará de tamaño para dejar entrar más cantidad de luz.

                        2.- El cristalino del ojo será quien proyecte las imágenes enfocadas en la retina. Puede aplanarse o abombarse según lo cerca o lejos que esté el objeto que veamos. El cristalino se deteriora con los años y pierde capacidad de acomodación. Esto da lugar a conocidos problemas ópticos como la presbicia o vista cansada.

                        3.- La retina recibe la imagen invertida en sus paredes. La luz estimula los conos y los bastones quienes transforman esa información en impulsos nerviosos. Esta electricidad se trasladará al cerebro a través del nervio óptico. El cerebro es quien realmente ve las imágenes. Endereza la imagen invertida de la retina e interpreta la información de color, tamaño, posición, etc.

                        La imagen formada en la retina es plana, en 2 dimensiones. Vemos imágenes en 3 dimensiones por la separación de aproximadamente 6 cm. de nuestros ojos.
                        <img ref={"src/img/co.jpg"}/>
                    </div>
                    <h3 className={"subtit"}>Para más información</h3>
                    <div className={"texto"}>
                        Dar <a href={"https://www.youtube.com/watch?v=k8h_1w1mQ14"}>clic aquí</a>
                        <img ref={"src/img/comv.jpg"}/>
                    </div>
                </div>
                </body>
                <footer className={"C-footer"}>
                    Contacto
                    <Contacto/>
                    Comentarios
                    <Comentarios/>
                </footer>
                <div className={"C-creador"}>
                    © 2020 Serrano Veliz Silvia Raquel. 17151241
                </div>
            </Container>
        </div>
    );
}

export default ComoVe;