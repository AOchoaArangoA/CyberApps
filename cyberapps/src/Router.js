import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Tablero from './components/Tablero';

const Router = () => {
    return (
        /* Configurar rutas y paginas */
        <BrowserRouter>
            <Switch>
                <Route path="/ruta-prueba" component={Tablero} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
