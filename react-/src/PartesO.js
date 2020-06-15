import React from 'react';
import NabvarX from './Components/NabvarX';
import {Container} from '@material-ui/core'
import Contacto from './Components/Contacto';
import Comentarios from './Components/Comentarios';

import './C-Styles.css'

const PartesO = (props) => {
    return (
        <div>
            <Container fixed>
                <header className="C-header">
                    <NabvarX/>
                </header>
                <body className={"C-body"}>
                <div className={"contenido"}>
                    <h1 className={"titulo"}>Partes del ojo</h1>
                    <h3 className={"subtit"}>Funcionamiento</h3>
                    <div className={"texto"}>
                        La vista, al igual que los otros sentidos, requiere algo mas que el ojo para funcionar. Para que el cerebro pueda interpretar lo que ve el ojo, tiene que entrar luz por este último. La luz que golpea un objeto se refleja después en el ojo. Los rayos luminosos pasan primero por la córnea (la ventana anterior transparente), luego por el humor acuoso (líquido acuoso que se encuentra detrés de la córnea), después por la pupila (orificio situado en el centro del iris), el cristalino y por último el gel vítreo hasta llegar a la retina. La córnea y el cristalino refractan los rayos de luz y los dirigen hacia la retina (la pared posterior interna del ojo) que contiene aproximadamente 127 millones de células sensibles a la luz que forman el bastón y el cono del ojo.

                        Estas células absorben los rayos luminosos y los convierten en una señal electroquímica que se transmite a otras células de la retina. De ahí pasa por el nervio óptico hasta llegar a la zona del cerebro donde se encuentran los lóbulos occipitales y donde se produce el proceso visivo.

                        El funcionamiento del ojo se puede comparar con el de una cámara fotográfica que tiene la propiedad de adaptar automáticamente los diferentes niveles de luminosidad y enfocar la luz en la película fotográfica de la cámara (el bastón y el cono receptor de la retina).
                        <img ref={"src/img/ojo.jpg"}/>
                    </div>
                    <h3 className={"subtit"}>Partes del ojo</h3>
                    <div className={"texto"}>
                        CÁMARA ANTERIOR. Constituye el espacio existente entre la córnea y el iris, o sea, el complejo cristalino que contiene el humor acuoso, que a su vez es un fluido claro y transparente.
                        PUPILA. Constituye la apertura existente en el centro del iris de la masa transparente y carente de color, formada por material blando y gelatinoso que cubre el ojo por la parte posterior del cristalino.
                        CRISTALINO. Es la parte del ojo humano que enfoca el haz de luz en la retina. Tiene forma de lente biconvexa y es la segunda lente más importante.
                        IRIS. Es la parte coloreada del ojo. Su función es regular la entrada de luz aumentando o disminuyendo su tamaño según la intensidad de la misma.
                        CÓRNEA. Es una de las partes externas del ojo. Protege al cristalino y al iris permitiendo el paso de la luz.
                        RETINA. Es la capa interna mas profunda del ojo que contiene las células nerviosas sensible a la luz y las fibras que se unen para formar el nervio óptico y seguir el recorrido hasta el cerebro.
                        Está compuesta por los conos y los bastones. El ojo tiene alrededor de 6 millones y son poco sensibles a la luz. Su función es dar información sobre la nitidez y el color. Los bastones son 120 millones y son muy sensibles. Con ellos percibimos el brillo y el blanco y negro. Se estimulan en función de la luz que reciben y envían la información al nervio óptico.
                        CUERPO CILIAR. La parte de la capa vascular entre el iris y la membrana coroides, contiene los músculos de sostén y segrega el fluido acuoso.
                        MEMBRANA COROIDES. Es la capa vascular intermedia del ojo que se encuentra entre la retina y la esclerótica.
                        MÁCULA. Constituye una zona reducida de la retina que se encarga de proporcionar la visión clara central (o la línea recta).
                        NERVIO ÓPTICO. El está formado por un cable de fibras nerviosas y transmite el mensaje visual desde la retina hasta el cerebro. La protección del ojo se encuentra protegido de posibles daños por la órbita ósea en la que reside. La glándula lagrimal, que se halla ubicada entre la extremidad externa superior de cada órbita, tiene la propiedad de segregar lágrimas las cuales fluyen por toda la superficie exterior del ojo. Las lágrimas se deslizan por un pequeño orificio que se encuentra en la parte angular interior de los párpados hasta llegar a la nariz a través del conducto lagrimal.

                        La parte anterior de los ojos está protegida por los párpados. El movimiento de los párpados sirve para que el fluido de las lágrimas se mueva y así se pueda mantener humedecida la córnea y limpia de las impurezas que aparezcan en la superficie del ojo. Las lágrimas se producen cuando lloramos o cuando tenemos los ojos irritados.
                        <img ref={"src/img/funojo.jpg"}/>
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

export default PartesO;