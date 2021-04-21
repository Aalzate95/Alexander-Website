import React from 'react'
import './TopBar.css'

/* var prevScrollpos = window.pageYOffset;
if (window.screen.width>600){
    window.onscroll = function() {
        
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
            document.getElementById("TopBar").style.top = "0";
            } else {
            document.getElementById("TopBar").style.top = "-100px";
            }
            prevScrollpos = currentScrollPos;
        }
} */
  
const TopBar = () => {
    return ( 
        <div className="TopBar" id="TopBar">
            <nav className="navbar">
                <div className="navbar-main">
                    <h3><a href="/">Alexander Alzate</a></h3>
                </div>
                <div className="navbar-options">
                    <ul>
                        <li><a href="/#SobreMi">Sobre mi</a></li>
                        <li><a href="/#Habilidades">Habilidades</a></li>
                        <li><a href="/#Proyectos">Proyectos</a></li>
                        <li><a href="/#Contacto">Contacto</a></li>
                    </ul>
                </div>
            </nav>
        </div>
     );
}
 
export default TopBar;