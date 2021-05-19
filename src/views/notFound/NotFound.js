import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return ( 
    <div className="NotFound">
        <div className="Stars-container">
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div> 
        </div>
        <div className="NotFound-content">
            <div className="circulo-externo"></div>
            <div className="circulo-interno"></div>
            <h1>404</h1>
            <h2>Page not found</h2>
        </div>
    </div>
     );
}
 
export default NotFound;