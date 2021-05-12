import React from 'react';
import './AboutMe.css';
import { useHistory } from "react-router-dom";
const AboutMe = () => {
    const history = useHistory()

    return ( 
        <div className="AboutMe">
            <div className="etiquetaReturn" onClick={(e)=>history.push("/")}>
                <p>Regresar</p>
            </div>
            <div className="AboutMe-content">
                <h1>Mi historia</h1>
                <span></span>
                <p>En proceso de trabajo...<br/><br/>
                No hay estrellas esta noche, están ocupadas ayudándome a redactar mi historia.</p>
            </div>
        </div>
     );
}
 
export default AboutMe;