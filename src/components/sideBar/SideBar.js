import React from 'react'
import './SideBar.css'
import {} from 'react-icons/io5'
import { GrInstagram,GrGithub,GrTwitter,GrLinkedin } from "react-icons/gr";


const SideBar = () => {
    return ( 
        <div className="SideBar">
            <ul>
                <li><a href="https://www.instagram.com/alex.alzate95/" target="_blank" rel="noopener noreferrer"><GrInstagram/></a></li>
                <li><a href="https://github.com/Aalzate95" target="_blank" rel="noopener noreferrer"><GrGithub/></a></li>
                <li><a href="https://twitter.com/AlexAlzate95" target="_blank" rel="noopener noreferrer"><GrTwitter/></a></li>
                <li><a href="https://www.linkedin.com/in/aalzate95/" target="_blank" rel="noopener noreferrer"><GrLinkedin/></a></li>
            </ul>
        </div>
     );
}
 
export default SideBar;