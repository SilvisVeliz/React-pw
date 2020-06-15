import React from 'react';
import NabvarX from './Components/NabvarX';
import {Container} from '@material-ui/core'
import Contacto from './Components/Contacto';
import Comentarios from './Components/Comentarios';

import './C-Styles.css'

const NegHem = (props) => {
    return (
        <div>
            <Container fixed>
                <header className="C-header">
                    <NabvarX/>
                </header>
                <body className={"C-body"}>
                    <div className={"contenido"}>
                        <h1 className={"titulo"}>Negligencia Hemisférica</h1>
                        <h3 className={"subtit"}>¿Qué es?</h3>
                        <div className={"texto"}>
                            Es el deterioro de los centros visuales de un lado del cerebro que provoca que el enfermo sólo vea la mitad de las cosas. Estos pacientes sólo comen, por ejemplo, el lado izquierdo del plato, escriben en el lado izquierdo del folio o se atan sólo el zapato izquierdo.
                            <img ref={"src/img/hemis.jpg"}/>
                            Este síndrome se caracteriza principalmente porque la persona afectada deja de atender el lado izquierdo de su cuerpo y el espacio que lo rodea. Incluso ignora la parte izquierda de los objetos que percibe. Aunque pueden seguir percibiendo sensaciones en la parte izquierda de su cuerpo, no les prestan atención. Se acompaña de disfunciones cognitivas y de comunicación, problemas de memoria, de atención y razonamiento.
                            Los pacientes con Negligencia Unilateral pueden, por ejemplo, comer sólo de la mitad derecha del plato, ponerse únicamente el zapato derecho o peinarse la parte derecha de la cabeza. Al dibujar un reloj, suelen trazar bien el círculo, pero al poner los números dentro los amontonan todos en el lado derecho, o se paran sin más al llegar al 6 o al 7. Tampoco reconocen como propios su brazo o su pierna izquierda, simplemente actúan como si el lado izquierdo del mundo y de sus cuerpos no existiera.
                            <img ref={"src/img/negh.jpg"}/>
                            La negligencia se produce incluso cuando los sujetos imaginan. En un conocido estudio de Bisiach y Luzzatti, los investigadores pidieron a dos pacientes con negligencia unilateral que describieran un lugar conocido para ellos, la Plaza del Duomo de Milán. Primero les pidieron imaginar que se encontraban en el extremo norte de la plaza, y que describieran lo que veían: los pacientes describieron con precisión la parte oeste de la plaza (situada a su derecha), pero ignoraron el otro lado. Lo mismo ocurrió, a la inversa, cuando se les pidió imaginar que se encontraban en el extremo opuesto.
                        </div>
                        <h3 className={"subtit"}>Características</h3>
                        <div className={"texto"}>
                            - Negligencia unilateral del lado izquierdo. No reconoce el lado izquierdo de su cuerpo, es como si éste no existiera. Todas las acciones las realiza con el lado derecho y solo ven lo que hay del lado derecho de su perspectiva.
                            - Memoria afectada. Presentan gran dificultad para recordar la información recién aprendida (memoria a corto plazo). También experimentan dificultad en lo que refiere a las fechas importantes, entre otras cosas.
                            <img ref={"src/img/negligencia-hermisferica-ejemplo.jpg"}/>
                            - Atención. Tienen dificultad en concentrarse en una tarea, se distraen fácilmente. Generalmente, no pueden realizar más de una tarea por vez.
                            - Desorientación. La persona que padece de este síndrome, suele no saber dónde se encuentra ni qué fecha es. En algunos casos, tampoco recuerda datos personales, como por ejemplo, su fecha de nacimiento, su edad, etc.
                            - Razonamiento. Las personas con este síndrome suelen ser muy concretas a la hora de la comunicación, no comprenden las metáforas, las ironías ni los chistes. Suelen decir cosas inapropiadas y no demuestran expresiones faciales que acompañen su sentimientos.
                            - Desorganización. Hay una alteración de la secuencia de los hechos y dificultad en mantener el hilo de la conversación.
                        </div>
                        <h3 className={"subtit"}>Causas</h3>
                        <div className={"texto"}>
                            Nuestro cerebro está dividido en dos hemisferios, cada unos de los cuáles controla el lado contrario del cuerpo. Es así, que el hemisferio izquierdo controla nuestro lado derecho y viceversa. En algunos casos, pueden existir lesiones en el hemisferio derecho, concretamente en el lóbulo parietal, que generan una serie de síntomas y características que dan lugar a este síndrome. Esta región parece encargarse de integrar información sobre los movimientos y la localización de las partes del cuerpo con la de la localización de los objetos en el espacio que nos rodea.
                            <img ref={"src/img/NE.gif"}/>
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

export default NegHem;