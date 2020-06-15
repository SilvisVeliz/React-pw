import React from 'react';
import NavbarX from './Components/NavbarX';
import {Container} from '@material-ui/core'
import Contacto from './Components/Contacto';
import Comentarios from './Components/Comentarios';

import './C-Styles.css'

const Salicia = (props) => {
    return (
        <div>
            <Container fixed>
                <header className="C-header">
                    <NavbarX/>
                </header>
                <body className={"C-body"}>
                    <div className={"contenido"}>
                        <h1 className={"titulo"}>Síndrome de Alicia en el país de las maravillas</h1>
                        <h3 className={"subtit"}>¿Qué es?</h3>
                        <div className={"texto"}>
                            Se trata de un trastorno neurológico muy raro en el que la percepción visual queda alterada, viéndose las cosas de un tamaño que no se corresponde con la realidad.
                            Así, puede ocurrir que la persona vea un objeto como si este fuera mucho más pequeño de lo que es, o que se crea un gigante entre elementos miniaturizados, o que ocurra todo lo contrario y note cómo elementos del entorno o de su propio cuerpo son más pequeños de lo normal.
                            En concreto, es muy corriente que la alucinaciones visuales que aparecen con este síndrome tengan que ver con el modo en el que se perciben las partes del propio cuerpo.
                            <img ref="src/img/ali.jpg"/>
                        </div>
                        <h3 className={"subtit"}>Causas</h3>
                        <div className={"texto"}>
                            El síndrome de Alicia en el país de las maravillas puede ser provocado por una cantidad anormal de electricidad en el cuerpo, lo que causa un cambio en el flujo sanguíneo del cerebro, y donde las señales enviadas desde el cerebro a los ojos se perturban, dando lugar a alucinaciones, desorientación y una auto-imagen alterada en ciertas partes del cuerpo.
                            Otra causa a la que puede deberse, es la epilepsia del lóbulo temporal donde aparecen convulsiones en los lóbulos temporales, pudiendo tener reacciones de euforia, o un intenso miedo y paranoia.
                            También puede ser debido a dolores de cabeza, migrañas, tumores cerebrales o debido al virus "Epstein-Barr", donde pueden mostrarse los síntomas en etapas iniciales.
                            <img ref="src/img/alic.jpg"/>
                        </div>
                        <h3 className={"subtit"}>Síntomas</h3>
                        <div className={"text"}>
                            - Imagen corporal alterada, donde la persona afectada observa partes del cuerpo de tamaño erróneo tamaños de partes del cuerpo erróneamente, viéndose deproporcionadas la cabeza y las manos.
                            - El paciente percibe el tamaño de otros objetos incorrectamente.
                            - El individuo pierde el sentido del tiempo, ya que puede pasar de modo lento o demasiado rápido.
                            - Algunas personas pueden experimentar fuertes alucinaciones, que pueden visualizar las cosas que no están en el entorno y también pueden mostrar impresiones equivocadas de ciertas situaciones.
                            - Sufren alteración de la percepción visual, pero también de la percepción auditiva y táctil.

                            En algunos casos, el Síndrome de Alicia en el País de las Maravillas puede plasmarse en micropsia, mientras que en otros se expresa en forma de macropsia.

                            - Micropsia: En la micropsia, todo parece ser significativamente más pequeño de lo que es en realidad.
                            - Macropsia: En este caso ocurre lo contrario a lo que define la micropsia, como si fuesen mucho más grandes de lo esperable.

                            Otros síntomas:
                            Los dos fenómenos anteriores hacen que tampoco se sepa determinar muy bien a qué distancia de uno mismo está un objeto, animal o persona, lo cual produce desorientación, ansiedad y una sensación de vulnerabilidad.
                            Estas alucinaciones visuales no suelen durar indefinidamente, y desaparecen al cabo de unos minutos. Por otro lado, es más frecuente que aparezcan durante la noche, cuando hay poca luz y cuando se está a punto de caer en estado de sueño (algo que también es común en otras formas de alucinaciones).
                            Además, en algunos casos el Síndrome de Alicia en el País de las Maravillas va acompañado por la pérdida de la noción del tiempo y/o de alucinaciones sobre objetos, animales, objetos o personas que realmente no están a la vista, lo cual agrava la sensación de desorientación. En ocasiones, todos estos engaños visuales van acompañados de alucinaciones táctiles o auditivas.
                        </div>
                        <h3 className={"subtit"}>Tratamientos</h3>
                        <div className={"texto"}>
                            Después de haberse realizado el diagnóstico de este síndrome, se establece un tratamiento que dependerá de cada caso y de las causas relacionadas con la aparición de los síntomas. En ocasiones, un mejor descanso y sueño será suficiente para que los síntomas remitan, mientras que en otros hay que tratar enfermedades y alteraciones neurológicas de carácter crónico.
                            En todo caso, cualquier forma de intervención sobre el Síndrome de Alicia en el País de las Maravillas debe ser propuesta y supervisada por un especialista de la salud lo suficientemente acreditado para ello y formado en salud mental y neurología.

                            <img ref="src/img/a.jpg"/>

                            Del mismo modo, el pronóstico de este síndrome es muy variable, y depende de cuáles sean sus causas y lo fácil que resulte intervenir sobre ellas para solucionar el problema.
                        </div>
                        <h3 className={"subtit"}>¿Quién lo experimenta?</h3>
                        <div className={"texto"}>
                            El Síndrome de Alicia en el País de las Maravillas es mucho más frecuente durante la infancia y la adolescencia. A partir de los 30 años de edad es mucho más raro y, en todo caso, podría aparecer como resultado de lesiones cerebrales.
                        </div>
                        <h3 className={"subtit"}>Caso excepcional</h3>
                        <div className={"texto"}>
                            A pesar de la sintomatología característica de este padecimiento, un grupo de investigadores gallegos ha estudiado un caso excepcional en una niña de ocho años de edad (de la que no se revelan datos personales) que nunca antes había tenido migraña. Sus observaciones se publican en el último número de la Revista de Neurología.

                            "La niña, que sufrió trastornos de la percepción visual todos los días durante un mes y cada dos o tres días en las dos semanas siguientes, empezó con los síntomas sin haber tenido antes cefaleas", explica a Servicio de Información y Noticias Científicas (SINC), María José Corral Caramés, autora principal del estudio y pediatra del Centro de Salud A Ponte (Orense), de Galicia, España.

                            "Un día vi cómo los libros de mi hermana se volvían más grandes y cómo mi padre se hacía tan pequeño como un muñeco. Siento que mi cuerpo crece y crece hasta que parece ocupar la habitación entera", comentó la niña que fue objeto de estudio.

                            <img ref="src/img/alicaso.jpg"/>
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

export default Salicia;