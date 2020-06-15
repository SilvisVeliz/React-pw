import React from 'react';
import NabvarX from './Components/NabvarX';
import {Container} from '@material-ui/core'
import Contacto from './Components/Contacto';
import Comentarios from './Components/Comentarios';

import './C-Styles.css'

function Sines() {
    const config = {
        systemName:  'Sinestesia'
    }
    return (
        <div>
            <Container fixed>
                <header className="C-header">
                    <NabvarX/>
                </header>
                <body className={"C-body"}>
                <div className={"contenido"}>
                    <h1 className={"titulo"}>Sinestesia</h1>
                    <h3 className={"subtit"}>¿Qué es?</h3>
                    <div className={"texto"}>
                        Es la capacidad de percibir las cosas con varios sentidos a un mismo tiempo. Por ejemplo, ver un sonido, oír un color o notar un sabor cuando tocas una textura.Una fusión de sentidos ante los estímulos.
                        Otra definición: La Sinestesia es una figura retórica que consiste en mezclar sensaciones de sentidos distintos (audición, visión, gusto, olfato, tacto) o mezclar dichas sensaciones con sentimientos (tristeza, alegría, etc.)
                        <img ref={"src/img/si.jpg"}/>
                    </div>
                    <h3 className={"subtit"}>¿Quién lo descubrió?</h3>
                    <div className={"texto"}>
                        La primera vez que se habló de este fenómeno fue en 1812, cuando el doctor G.T.L. Sachs lo describió.
                    </div>
                    <h3 className={"subtit"}>Causas</h3>
                    <div className={"texto"}>
                        Científicos de la Universidad de California sostienen que sus descubrimientos apoyan la idea de que la sinestesia se debe a una activación cruzada de áreas adyacentes del cerebro que procesan diferentes informaciones sensoriales. Este cruce podría explicarse por un fallo en la conexión de los nervios entre las distintas áreas cuando el cerebro se desarrolla en el interior del útero.

                        La sinestesia puede ocurrir incluso cuando uno de los sentidos está dañado. Por ejemplo, una persona que puede ver colores cuando oye palabras puede seguir percibiendo estos colores aunque pierda la visión durante su vida. Este fenómeno recibe también el nombre de "colores marcianos", término que se originó tras un caso de un sinestético que nació parcialmente daltónico pero decía ver colores 'alienígenas', que era incapaz de ver en el sentido habitual del término y que en realidad percibía debido a su sinestesia.

                        Se da con más frecuencia entre los autistas. Algunos tipos de epilepsia provocan también percepciones sinestésicas.
                        <img ref={"src/img/sin (2).jpg"}/>
                    </div>
                    <h3 className={"subtit"}>Ejemplos de sinestesia</h3>
                    <div className={"texto"}>
                        - Suave como un silbido de verano - mezcla de tacto con audición: La Sinestesia pertenece al grupo de figuras de los Tropos. Etimológicamente procede del griego "syn" (junto) y "aesthesis" (sensación).
                        - Y cuando salió del agua y se acercó, sentí el calor de su mirada, el perfume de sus palabras, lo salado de sus caricias, el sonido de su belleza, lo brillante de su abrazo.
                        - Escucho con los ojos a los muertos.
                        - De las hojas mojadas, de la tierra húmeda, brotaba entonces un aroma delicioso , y el agua de la lluvia recogida en el hueco de tu mano tenía el sabor de aquel aroma.
                    </div>
                    <h3 className={"subtit"}>Tipos de sinestesia</h3>
                    <div className={"texto"}>
                        <img ref={"src/img/sineste.jpg"}/>
                        - Léxico a gusto:
                        Es el menos típico. Consiste en sentir un sabor concreto en la boca cuando pronuncias una palabra.
                        - Grafema con color:
                        Esta es la más frecuente. 1 de cada 100 personas la experimentan. Cuando la persona oye o ve un signo, letra o número, percibe un color.
                        - Música en color:
                        Mientras escucha una melodía, el sinésteta relaciona la música, el timbre o el ritmo con un color. De este modo, una canción se vuelve un conjunto vivo de colores. El pintor Kandinksy percibía la música de esta forma y eso le permitió dejarnos obras tan increíbles como:
                        <img ref={"src/img/sines.jpg"}/>
                    </div>
                    <h3 className={"subtit"}>Explicación</h3>
                    <div className={"texto"}>
                        Siguiendo a Richard Cytowic, la percepción sinestésica es:
                        Involuntaria y automática.
                        Localizable en el espacio.
                        Consistente y genérica.
                        Duradera.
                        De una importancia emocional.

                        La primera característica hace referencia a la incapacidad por parte del sinestésico de controlar la activación de cierta sensación asociada. No pueden suprimir la experiencia sinestésica. Cuando los sinéstetas describen su experiencia, a menudo hablan de un color proyectado sobre el carácter escrito (sinéstetas grafema-color) o de formas visuales en "una pantalla" situada a cierta distancia delante de la cara (sinésteta auditivo-visual), es decir, localizable en el espacio.

                        La percepción sinestésica es consistente en el hecho de que no cambia, es uno de los más importantes criterios diagnósticos. Una vez establecida la sinestesia, esta perdura a lo largo de los años. De ahí que muchos estudios se hayan basado en esta característica, que diferencia a los sinestésicos de aquellos que asocian por memorización.
                        Por lo tanto, la sinestesia es duradera en el tiempo. Se hereda por el cromosoma X, se da con mayor frecuencia en mujeres que en hombres. Por último, los sinéstetas informan sobre emociones placenteras que acompañan a la experiencia sensorial, parecidas a la "sensación eureka".

                    </div>
                    <h3 className={"subtit"}>La sinestesia y el arte</h3>
                    <div className={"texto"}>
                        - Kandinsky.
                        - Arhrtur Rimbaud.
                        - Charles Baudelaire.
                        - Sergei Rachmanioff.
                        - Franz Liszt.

                        En arte, la sinestesia se refiere al uso de elementos artísticos que involucran a diferentes sentidos conjuntamente.
                    </div>
                    <h3 className={"subtit"}>Sinestesia en la literatura</h3>
                    <div className={"texto"}>
                        <i>Se le vincula con la enálage y con la metáfora, por lo que a veces recibe el nombre de metáfora sinestésica.

                        Hay precedentes del uso de este tropo ya en la literatura clásica, como por ejemplo Virgilio. En España fue utilizada por los escritores barrocos. Pero fueron los poetas franceses de finales del siglo XIX quienes la pusieron de moda en la lírica, especialmente en la corriente denominada simbolismo, que en España apareció subsumida dentro del llamado modernismo literario. Así, por ejemplo, el poeta simbolista francés Arthur Rimbaud creó un soneto dedicado a las vocales, adjudicando a cada una de ellas un color distintivo, y los poetas modernistas como Rubén Darío podían hablar de sonoro marfil o de dulces azules (gusto más vista). En este caso, se trata de una sinestesia de primer grado, ya que son impresiones de dos sentidos corporales diferentes; pero si se asocia la impresión de un sentido del cuerpo no a otra impresión de un sentido diferente, sino a una emoción, un objeto o una idea, se trata ya de una sinestesia degradada o indirecta, también llamada sinestesia de segundo grado, por ejemplo, agria melancolía.

                        Pero es Juan Ramón Jiménez quien la emplea con mayor asiduidad y perfección, al que seguirán después los poetas del 27:
                        <img ref={"src/img/artesines.jpg"}/>
                        Es de oro el silencio. La tarde es de cristales.
                        JRJ, Hora inmensa

                        En el cénit azul, una caricia rosa!
                        JRJ, Elejías lamentables

                        Por el verdor teñido de melodiosos oros;
                        JRJ, Elejías lamentables
                        </i>
                        Las asociaciones sinestésicas favorecen la memorización de conceptos abstractos, al vincularlos con realidades sensibles.

                        Personajes como:

                        Charles Baudelaire.
                        Nikolai Rimsky-Korsakov.
                        Vladimir Nabokov.
                        Marcel Proust.
                        Alexander Scriabin.
                        Olivier Messiaen.
                        David Hockne.
                        Entre otros.

                        Poseen (o poseían) esta facultad.
                    </div>
                    <h3 className={"subtit"}>Sinestesia en la música</h3>
                    <div className={"texto"}>
                        Resulta particular el caso del compositor ruso Alexander Scriabin, cuya habilidad sinestésica influyó decisivamente en su obra. Su principal virtud fue asociar tonalidades con colores determinados. Su sistema de colores, a diferencia de la mayoría de las experiencias sinestésicas, se ordena según el círculo de quintas, basado en el sistema que Sir Isaac Newton describe en su libro Opticks.
                        <img ref={"src/img/sinesmus.jpg"}/>
                        Otros compositores han dejado también constancia de percepciones sinestésicas. Mozart, por ejemplo, afirmó que percibía la tonalidad de "Fa" (F) en color amarillo.
                    </div>
                    <h3 className={"subtit"}>Test</h3>
                    <div className={"texto"}>
                        Pulsa aquí para dirigirte a un test. <a href={"https://www.youtube.com/watch?v=uB1aFBiIqBk"}>AQUÍ</a>
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

export default Sines;