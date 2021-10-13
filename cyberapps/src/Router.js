import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Tablero from './components/Tablero';
import crearP from './components/crearP';
const Router = () => {
    return (
        /* Configurar rutas y paginas */
        <BrowserRouter>
            <Switch>
                <Route path="/ruta-prueba" component={crearP} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
