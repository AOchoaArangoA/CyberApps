import './assets/css/App.css';


/* Componentes */
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Tablero from './components/Tablero';
import {Login} from './components/Login';
import {Profile} from './components/Profile'; 
import {Logout} from './components/Logout';
import crearP from './components/crearP';
function App() {
  return (
    <div className="App sb-nav-fixed">
      <Header />


      <div id="layoutSidenav">
        {/* <crearP/> */}
        {/* <SideMenu /> */}
        
        <Login />
        <Profile/> 
        <Logout/>
        {/* <Tablero /> */}

       

      </div>
    </div>
  );
}

export default App;
