import './App.css';
import TopBar from './components/topBar/TopBar'
import SideBar from './components/sideBar/SideBar'

function App() {
  return (
    <div className="App">
      <TopBar/>
      <SideBar/>
      <div className="Stars-container">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div> 
      </div>

      <div className="content">
          <div className="resume">
            <div className="resume-title">
              <h1>ALEXANDER ALZATE</h1>
              <span></span>
              <p>Desarrollador de Software / <br/>Ingeniero en Ciencias Computacionales</p>
            </div>
            <div className="resume-content">
              <p>Soy un desarrollador de software colombiano residente en Ecuador especializado en desarrollo web.
              Actualmente estoy trabajando para las multinacionales <a href="https://www.asimetrix.co/en/" rel="noopener noreferrer">Asimetrix</a> y <a href="https://www.premex.co/es/" rel="noopener noreferrer">EcuadPremex S.A</a>, 
              empresas enfocadas a la producción animal.</p>
            </div>
          </div>
          <div id="SobreMi">
            <div className="SobreMi">
              <p>Hola!, soy Alexander Alzate un desarrollador de software que ama aprender cosas nuevas día a día, apasionado por lo que hago, doy todo de mí en cada linea de codigo.</p>
            </div>
          </div>
          <section id="Habilidades">
            <div className="Habilidades">
              <h1>Habilidades</h1>
            </div>
          </section>
          <section id="Proyectos">
          <div className="Proyectos">
            <h1>Proyectos</h1>
          </div>
          </section>

          <section id="Contacto">
            <div className="Contacto">
              <h1>Contacto</h1>
            </div>
          </section>
      </div>
    </div>
  );
}

export default App;

  
      
