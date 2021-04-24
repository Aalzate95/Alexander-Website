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
import Carrousel from './components/carrousel/Carrousel'

const habilidades =[
  {title:"React",logo:react_logo,color:["#20232A"]},
  {title:"Python",logo:python_logo,color:"#5c59ff"},
  {title:"C",logo:c_logo,color:"#59ff99"},
  {title:"Java",logo:java_logo,color:"#fff459"},
  {title:"Html",logo:html_logo,color:"#8bff59"},
  {title:"CSS",logo:css_logo,color:"#e3fffe"},
  {title:"JavaScript",logo:javascript_logo,color:"#ff6666"},
  {title:"Postgres",logo:postgres_logo,color:"#5da0d4"},
  {title:"MongoDB",logo:mongodb_logo,color:"#ff9959"},
  {title:"Git",logo:git_logo,color:"#20232A"},
]

const dataProyectos = [
  {titulo:"prueba1",descripcion:"masjda  asjdansd jandad",imagen:"https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_blanco_500x500.jpg"},
  {titulo:"prueba2",descripcion:"masjda  asjdansd jandad",imagen:"http://via.placeholder.com/500x500"},
  {titulo:"prueba3",descripcion:"masjda  asjdansd jandad",imagen:"https://image.shutterstock.com/image-vector/icon-mouse-cursor-pointer-arrow-260nw-1287656104.jpg"},
  {titulo:"prueba4",descripcion:"masjda  asjdansd jandad",imagen:"https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_blanco_500x500.jpg"},
  {titulo:"prueba5",descripcion:"masjda  asjdansd jandad",imagen:"https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_blanco_500x500.jpg"},
]

function App() {
  const renderPlanets = habilidades.map((planet)=>{
    return(
      <figure className="planeta" key={planet.title} style={{background:`radial-gradient(circle at 100px 18px, ${planet.color}, #000)`}}>
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
              <div className="title">
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
              <div className="title">
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
              <div className="title">
                <h1>Proyectos</h1>
                <span></span>
              </div>

              <div  className="">
                <Carrousel
                  data={dataProyectos}
                />
              </div>
              
            </div>
          </div>

          <div id="Contacto">
            <div className="Contacto">
              <div className="title">
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
                  <div className="form-group contact-button">
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

  
      
