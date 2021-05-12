import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import TopBar from '../../components/topBar/TopBar'
import SideBar from '../../components/sideBar/SideBar'
import react_logo from '../../images/react.png'
import c_logo from '../../images/c-logo.png'
import java_logo from '../../images/java-logo.png'
import python_logo from '../../images/python-logo.png'
import html_logo from '../../images/html-logo.png'
import css_logo from '../../images/css-logo.png'
import javascript_logo from '../../images/javascript-logo.png'
import postgres_logo from '../../images/postgres-logo.png'
import mongodb_logo from '../../images/mongodb-logo.png'
import git_logo from '../../images/git-logo.png'
import Carrousel from '../../components/carrousel/Carrousel'
import Darkhole from '../../components/darkhole/Darkhole'


const habilidades =[
    {title:"React",logo:react_logo,backgroundColor:"#20232A",barColor:"#3B8093",nivelHabilidad:"70%"},
    {title:"Python",logo:python_logo,backgroundColor:"#5c59ff",barColor:"#FFCD39",nivelHabilidad:"80%"},
    {title:"C",logo:c_logo,backgroundColor:"#59ff99",barColor:"#3949AB",nivelHabilidad:"20%"},
    {title:"Java",logo:java_logo,backgroundColor:"#fff459",barColor:"#BF190A",nivelHabilidad:"50%"},
    {title:"Html",logo:html_logo,backgroundColor:"#8bff59",barColor:"#E45E3B",nivelHabilidad:"90%"},
    {title:"CSS",logo:css_logo,backgroundColor:"#e3fffe",barColor:"#3A93C8",nivelHabilidad:"80%"},
    {title:"JavaScript",logo:javascript_logo,backgroundColor:"#ff6666",barColor:"#E3A028",nivelHabilidad:"65%"},
    {title:"PostgreSQL",logo:postgres_logo,backgroundColor:"#5da0d4",barColor:"#233D5C",nivelHabilidad:"20%"},
    {title:"MongoDB",logo:mongodb_logo,backgroundColor:"#ff9959",barColor:"#689A3F",nivelHabilidad:"20%"},
    {title:"Git",logo:git_logo,backgroundColor:"#20232A",barColor:"#F05133",nivelHabilidad:"60%"},
  ]
  
  const dataProyectos = [
    {titulo:"En construcción",descripcion:"",imagen:"https://i.pinimg.com/originals/26/63/9a/26639a3cf8d30c21a9a2ca65695712d9.jpg"},
    {titulo:"En construcción",descripcion:"",imagen:"https://i.pinimg.com/originals/c3/d7/9e/c3d79eb11ded441753abdd790569ca08.jpg"},
    {titulo:"En construcción",descripcion:"",imagen:"https://cdn.wallpapersafari.com/82/0/Q6AgKl.jpg"},
    {titulo:"En construcción",descripcion:"",imagen:"https://images-na.ssl-images-amazon.com/images/I/61S8d42Id7L._AC_.jpg"},
    {titulo:"En construcción",descripcion:"",imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbVZ6CA91CIqjsEaG1b1wCihQ6paCjF93hMAnK3Scv_UW7FeuwR3yq_JF9Q32BjLqCmyo&usqp=CAU"},
  ]

const Main = () => {

    const [mailMensaje,setMailMensaje] = useState("")
    const [mailNombre,setMailNombre] = useState("")
    const history = useHistory();
    const renderPlanets = habilidades.map((planet)=>{
        return(
          <div className="planeta-card"key={planet.title}>
                  <figure className="planeta"  style={{background:`radial-gradient(circle at 100px 18px, ${planet.backgroundColor}, #000)`}}>
                    <div className="planeta-logo">
                      <img alt="react" src={planet.logo}/>
                    </div>
                  </figure>
                  <div className="description-card">
                    <h4>{planet.title}</h4>
                    <div className="barraDeHabilidad">
                      <div className="nivelHabilidad" style={{backgroundColor:`${planet.barColor}`,width:`${planet.nivelHabilidad}`}}></div>
                      <div className="sombraBarraDeHabilidad"></div>
                    </div>
                  </div>
                </div>
          
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
              <p>Si quieres conocer mi historia o conseguir mi CV, los tienes aquí abajo.</p>
              <div className="SobreMi-content">
                    <div onClick={(e)=>{history.push("/about-me")}}>
                      <Darkhole
                          title="H"
                        />
                    </div>
                    <Darkhole
                      title="CV"
                    />
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

              <div  className="Proyectos-content">
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
                    <input className="form-control" name="from_name" type="text" id="nombre" placeholder="NOMBRE" onChange={(e)=>{setMailNombre(e.target.value)}}/>
                  </div>
                  <div className="form-group">
                    <input className="form-control" name="message" type="text" placeholder="MENSAJE" onChange={(e)=>{setMailMensaje(e.target.value)}}/>
                  </div>
                  <div className="form-group contact-button">
                    <a href={`mailto:alex.alzate95@gmail.com?subject=Quiero contactar contigo, mi nombre es ${mailNombre}&body=${mailMensaje}`} className="form-button">Enviar</a>
                  </div>
              </div>
            </div>
          </div>

      </div>
    </div>
     );
}
 
export default Main;