import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,

  } from "react-router-dom";
import Main from './views/main/Main'
import AboutMe from './views/aboutMe/AboutMe'
const CreateRoutes = () => {
    return ( 
        <Router>
            <Switch>
                <Route path="/about-me" component={AboutMe}/>
                <Route exact path="/" component={Main}/>
            </Switch>
        </Router>
     );
}
 
export default CreateRoutes;