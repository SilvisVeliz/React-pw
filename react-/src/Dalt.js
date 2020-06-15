import React from 'react';
import NabvarX from './Components/NabvarX';
import {Container} from '@material-ui/core'
import Contacto from './Components/Contacto';
import Comentarios from './Components/Comentarios';

import './C-Styles.css'

const Dalt = (props) => {
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
                        El daltonismo es la incapacidad para ver algunos colores en la forma normal.
                        Las personas con una visión del color normal mezclan los tres colores espectrales rojo, verde y azul para crear otros colores. Los conos, células sensoriales de la retina, son los responsables de ello. Solo actúan durante el día, por la noche lo vemos todo gris.
                        El daltonismo congénito y la visión de color defectiva innata tienen su causa en un defecto genético que afecta con mucha mayor frecuencia a los hombres que a las mujeres. La visión del color defectiva más común es la visión limitada de azules y amarillos.
                        <img ref={"src/img/daltonismoetc.png"}/>
                    </div>
                    <h3 className={"subtit"}>¿Quién lo descubrió?</h3>
                    <div className={"texto"}>
                        Esta enfermedad fue descubierta y descrita por John Dalton, un químico británico que la padecía, Ya que una vez compró unos calcetines rojos creyendo que eran cafés, lo que sorprendió a sus amigos y le hizo suponer que había algo raro con su percepción de los colores.
                        Creía que sus ojos estaban bañados por un líquido azul que absorbía el rojo, pero como no pudo comprobarlo, dispuso en su testamento que sus ojos fueran disecados para confirmar su teoría.
                        A mediados del siglo XX, un equipo de científicos británicos analizó sus ojos y su ADN y descubrió que en realidad era incapaz de ver el verde.
                    </div>
                    <h3 className={"subtit"}>Causas</h3>
                    <div className={"texto"}>
                        El daltonismo ocurre cuando hay un problema con los pigmentos en ciertas células nerviosas del ojo que perciben el color. Estas células se llaman conos y se encuentran en la capa de tejido sensible a la luz que recubre la parte posterior del ojo, llamada la retina.

                        Si sólo falta un pigmento, usted puede tener dificultad para diferenciar entre el rojo y el verde, que es el tipo más común de daltonismo. Si falta un pigmento diferente, usted puede tener dificultad para ver los colores azul y amarillo. Las personas con daltonismo para los colores azul y amarillo con frecuencia tienen problemas para identificar también los colores rojos y verdes.

                        Con frecuencia, esto se debe a la degeneración macular. Las personas que, de nacimiento, no ven determinados colores o los ven de forma deficiente no suelen ser conscientes de ello. El problema solo se detecta en función de su entorno.

                        La mayoría de los casos de daltonismo se deben a un problema genético. Muy pocas mujeres son daltónicas y aproximadamente 1 de cada 10 hombres sufren alguna forma de daltonismo. La droga hidroxicloroquina (Plaquenil), utilizada para tratar artritis reumatoidea y otras afecciones, también puede causar daltonismo.
                        <img ref={"src/img/daltonismo-genetica.jpg"}/>
                    </div>
                    <h3 className={"subtit"}>¿Cómo detectarlo?</h3>
                    <div className={"texto"}>
                        Existen varios métodos para detectarlo.
                        El método más rápido para la diagnosis del daltonismo consiste en unas láminas de manchas de Stilling e Ishihara. Estas láminas consisten en numerosos puntos de los distintos colores primarios dispuestos sobre fondos de colores similares, agrupados de modo que una persona normal puede distinguir en ellos números o formas conocidas.

                        Las personas que sufran algún tipo de daltonismo, sin embargo, no serán capaces de reconocer esas figuras, o bien verán otras diferentes en función del tipo y grado de la anomalía que padezcan.
                        En el siguiente apartado "test" puedes descubrirlo.
                    </div><h3 className={"subtit"}>Síntomas</h3>
                    <div className={"texto"}>
                        Unos de los síntomas pricipales son:

                        - Dificultad para ver los colores y su brillo en la forma usual.
                        - Incapacidad para establecer la diferencia entre sombras del mismo color o de colores similares.
                        - A menudo, los síntomas son tan leves que las personas no saben que padecen daltonismo.

                        En casos graves, se pueden presentar movimientos rápidos de los ojos de un lado a otro (nistagmo) y otros síntomas.
                    </div>
                    <h3 className={"subtit"}>Tipos de daltonismo</h3>
                    <div className={"texto"}>
                        <img ref={"src/img/tipos_de_daltonismo.jpg"}/>
                        Visión del color anómala: Las personas que la sufren tienen una capacidad limitada para reconocer algunos tonos. Todas las células sensoriales (conos rojos, verdes y azules) están presentes en la retina, pero algunas de ellas no actúan correctamente, normalmente se trata de los conos responsables de ver el color verde. El térmico técnico es deuteranomalía. De las personas que no discriminan el rojo se dice que son protanómalas.
                        Visión del color defectiva: En este tipo de daltonismo faltan algunas de las células sensoriales. Las personas que lo sufren solo tienen dos tipos de conos activos. En consecuencia, la visión del color se reduce significativamente. A veces, esto puede ser peligroso, sobre todo para conductores que no reconozcan bien los colores rojo y verde. Por ejemplo, en caso de niebla, solo ven negro en vez de la luz trasera roja de un vehículo delante de ellos.
                        Daltonismo total: La enfermedad conocida como acromatismo es muy rara y de la más grave. Las personas que sufren esta deficiencia no perciben ningún tono de color y también son muy sensibles a la luz. Siempre están en "modo nocturno" y en la oscuridad solo perciben contornos borrosos. Se trata de una rara afección en la cual una persona no puede ver ningún color, solamente sombras de gris.
                        <img ref={"src/img/daltonismo_1.jpg"}/>
                    </div>
                    <h3 className={"subtit"}>Tratamientos</h3>
                    <div className={"texto"}>
                        Su proveedor de atención médica o el oftalmólogo pueden examinar la visión cromática de varias formas. Las pruebas para el daltonismo son una parte frecuente de un examen ocular.
                        No hay tratamiento conocido. Hay gafas y lentes de contacto especiales que le pueden ayudar a las personas con daltonismo a diferenciar entre colores similares.

                        Todavía no es posible corregir el daltonismo con gafas ni lentes de contacto. Unas gafas especiales hacen posible cambiar solo el contraste de color, pero no la visión. No obstante, existe un consejo útil para aquellos que sufren daltonismo total: pueden llevar gafas especiales con lentes rojos. Estas gafas desvían la claridad de la luz diurna mejor que las gafas normales o las gafas de sol.
                    </div><h3 className={"subtit"}>Deficiencias</h3>
                    <div className={"texto"}>
                        Es posible que las personas que sufren daltonismo no puedan conseguir un trabajo que requiera la capacidad para ver los colores con precisión.
                    </div>
                    <h3 className={"subtit"}>Test</h3>
                    <div className={"texto"}>
                        El daltonismo puede diagnosticarse con diferentes tests de colores y es importante hacerlo debido a los problemas que pueden sufrirse tanto en la vida profesional como en la conducción vial.

                        Láminas pseudoisocromáticas: En este test se muestran cifras sobre un fondo de color (a menudo con resolución en puntos). Puede utilizarse para detectar la ceguera para rojos y verdes, por ejemplo:
                        Test de puntos coloreados de Farnsworth- En este test, los pacientes clasifican fichas de tonalidad diferente. El test es algo más complicado y puede utilizarse para detectar una deficiencia en la percepción del azul.
                        Anomaloscopio de Nagel- Consiste en que el paciente utilice un aparato circular para comprobar el color con el objeto de mezclar y especificar los matices de diferentes colores. Con él es posible determinar el grado de daltonismo y es el mejor método para diagnosticar la ceguera para el rojo.
                        <img ref={"src/img/dalton.jpg"}/>
                        - Si puedes ver los números escritos ¡FELICIDADES!, no eres daltónico.
                        - Si no puedes verlos, eres un daltónico.
                    </div>
                    <h3 className={"subtit"}>Otros nombres</h3>
                    <div className={"texto"}>
                        Deficiencia para ver los colores, Acromatopsia.
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

export default Dalt;