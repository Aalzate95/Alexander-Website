import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Main from './views/main/Main'
import AboutMe from './views/aboutMe/AboutMe'
import NotFound from './views/notFound/NotFound'

const CreateRoutes = () => {
    return ( 
        <Router>
            <Switch>
                <Route path="/about-me" component={AboutMe}/>
                <Route exact path="/" component={Main}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
     );
}
 
export default CreateRoutes;