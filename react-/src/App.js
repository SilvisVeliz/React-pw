import React from 'react';
import NabvarX from './Components/NabvarX';
import {Container} from '@material-ui/core'
import Contacto from './Components/Contacto';
import Comentarios from './Components/Comentarios';
import Caroussel from './Components/Carousel';
import Cards from './Components/Cards';
import Logo from './Components/Logo';

import './App.css';

function App() {
    const config = {
        systemName:  'Ojitos'
    }
  return (
    <div className="App">
        <Container fixed>
            <header className="App-header">
                <Logo/>
               <NabvarX/>
            </header>
            <body className={"App-body"}>
                Conoce más tus ojos... ¡Informáte!
                <Caroussel/>
                Lo más visto
                <Cards/>
            </body>
            <footer className={"App-footer"}>
                Contacto
                <Contacto/>
                Comentarios
                <Comentarios/>
            </footer>
            <div className={"App-creador"}>
                © 2020 Serrano Veliz Silvia Raquel. 17151241
            </div>
        </Container>
    </div>
  );
}

export default App;

