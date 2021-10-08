import './assets/css/App.css';


/* Componentes */
import Header from './components/Header';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <div className="App sb-nav-fixed">
      <Header />

      <div id="layoutSidenav">
      <SideMenu />
      
      </div>
    </div>
  );
}

export default App;
