import React from 'react';
import './AboutMe.css';
import { useHistory } from "react-router-dom";
const AboutMe = () => {
    const history = useHistory()

    return ( 
        <div className="AboutMe">
            <div className="AboutMe-content">
                <div className="title neon">
                    <h1>Mi historia</h1>
                    <span></span>
                </div>
                <div className="AboutMe-history">
                    <div className="AboutMe-history-parragraph"> 
                        <p>¡Hola! Si estás aquí es porque te interesa saber un poco más sobre mí, pues te cuento. Actualmente resido en Ecuador y me encuentro culminando mi último año de Universidad en la carrera de Ingeniería en Ciencias Computacionales en la Escuela Superior Politécnica del Litoral, en Guayaquil. Soy colombiano y llegué a Ecuador cuando solo tenía 8 años, fue un cambio muy fuerte para mí a esa edad, pero aprendí a sobrellevarlo.</p>
                        <p>Desde muy pequeño tuve gran afinidad con la tecnología, por lo que empecé en el mundo de la computación aproximadamente a los 12 años, todo empezó con los videojuegos, recuerdo que tenía una obsesión con el World of Warcraft (aún la tengo) y tanto era así, que quería saber como fue creado, quería poder añadirle nuevas funcionalidades o crear escenarios dentro del juego, lo cual me llevó a intentar crear mi propio servidor privado, por lo que empecé a investigar y a aprender cómo funcionaba todo ello, entonces terminé “trabajando” como administrador para un servidor de WoW. Por suerte, en ese entonces, en los colegios del Ecuador se podía seleccionar una especialidad como complemento, entre las cuales estaba la de Administración en Sistemas y ya te podrás imaginar cual escogí.</p>
                        <p>Al culminar mis estudios de colegio y haber obtenido mi título de bachiller y de administrador en sistemas, inmediatamente ingresé a la universidad a estudiar la carrera de Ingeniería, carrera a la que le he agarrado mucho cariño y ha aumentado mi pasión por la computación.</p>
                    </div>
                    <div className="AboutMe-photo">
                        <div className="border-photo">
                            <div className="photo"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="AboutMe-return" >
                <div onClick={(e)=>history.push("/")}>
                    <p>Regresar</p>
                </div>
            </div>
        </div>
     );
}
 
export default AboutMe;