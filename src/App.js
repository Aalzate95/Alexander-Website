import './App.css';
import TopBar from './components/topBar/TopBar'
import SideBar from './components/sideBar/SideBar'
import react_logo from './images/react.png'
import c_logo from './images/c-logo.png'
import java_logo from './images/java-logo.png'
import python_logo from './images/python-logo.png'
import html_logo from './images/html-logo.png'
import css_logo from './images/css-logo.png'
import javascript_logo from './images/javascript-logo.png'
import postgres_logo from './images/postgres-logo.png'
import mongodb_logo from './images/mongodb-logo.png'
import git_logo from './images/git-logo.png'

const habilidades =[
  {title:"React",logo:react_logo,color:"#20232A"},
  {title:"Python",logo:python_logo,color:"#20232A"},
  {title:"C",logo:c_logo,color:"#20232A"},
  {title:"Java",logo:java_logo,color:"#20232A"},
  {title:"Html",logo:html_logo,color:"#20232A"},
  {title:"CSS",logo:css_logo,color:"#20232A"},
  {title:"JavaScript",logo:javascript_logo,color:"#20232A"},
  {title:"Postgres",logo:postgres_logo,color:"#20232A"},
  {title:"MongoDB",logo:mongodb_logo,color:"#20232A"},
  {title:"Git",logo:git_logo,color:"#20232A"},
]

function App() {
  const renderPlanets = habilidades.map((planet)=>{
    return(
      <figure className="planeta">
        <div className="planeta-logo">
          <img alt="react" src={planet.logo}/>
        </div>
        <p>{planet.title}</p>
      </figure>
    )
  })
  return (
    <div className="App" >
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
              <div className="SobreMi-title">
                <h1>Sobre mi</h1>
                <span></span>
              </div>
              <div className="resume-content">
                <p>Hola!, soy Alexander Alzate un desarrollador de software que ama aprender
                 cosas nuevas día a día, apasionado por lo que hago, doy todo de mí en cada 
                 linea de codigo.</p>
              </div>
              
            </div>
          </div>
          <div id="Habilidades">
            <div className="Habilidades">
              <div className="Habilidades-title">
                <h1>Habilidades</h1>
                <span></span>
              </div>
              <div className="Habilidades-content">
                {renderPlanets}
              </div>
              
            </div>
          </div>
          <div id="Proyectos">
          <div className="Proyectos">
              <h1>-Proyectos-</h1>
              <div className="rocket">
                <span className="fins"></span>
              </div>
              <br/><br/>
              <h1>En proceso de desarrollo</h1>
          </div>
          </div>

          <div id="Contacto">
            <div className="Contacto">
              <div className="Contacto-title">
                <h1>Contacto</h1>
                <span></span>
              </div>
              <div className="Contacto-content">
                  <div className="form-group">
                    <input className="form-control" type="text" id="nombre" placeholder="NOMBRE"/>
                  </div>
                  <div className="form-group">
                    <input className="form-control" type="mail" id="nombre" placeholder="E-MAIL"/>
                  </div>
                  <div className="form-group">
                    <input className="form-control" type="text" placeholder="MENSAJE"/>
                  </div>
                  <div className="form-group buttons">
                    <button className="form-button">Enviar</button>
                  </div>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}

export default App;

  
      
