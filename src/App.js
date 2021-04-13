import './App.css';
import TopBar from './components/topBar/TopBar'
const texto = {
  "sobreMi":{
    "Saludo":"Hola!, mi nombre es Alexander Alzate"
  }
}
function App() {
  return (
    <div className="App">
      <TopBar/>
      <div className="Stars-container">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div> 
      </div>

      <div className="content">
          <div>
            <div className="resume">
              <h1>ALEXANDER ALZATE</h1>
              <p>Desarrollador de Software</p>
            </div>
          </div>
          <div id="SobreMi">
            <div className="SobreMi">
              <p>Hola!, soy Alexander Alzate un desarrollador de software que ama aprender cosas nuevas día a día, apasionado por lo que hago, doy todo de mí en cada linea de codigo.</p>
            </div>
          </div>
          <section id="Habilidades">
            <h1>Habilidades</h1>
          </section>
          <section id="Proyectos">
            <h1>Proyectos</h1>
          </section>
          <section id="Contacto">
            <h1>Contacto</h1>
          </section>
  
      </div>
      
    </div>
  );
}

export default App;
