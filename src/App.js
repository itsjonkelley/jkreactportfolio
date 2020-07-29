import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import about from './containers/about';
import projects from './containers/projects';
import contact from "./containers/contact";
import './style.css';


function App() {
  return (
    <Router>
      <Route exact path="/" component={about}/>
      <Route exact path="/about" component={about}/>
      <Route exact path="/projects" component={projects}/>
      <Route exact path="/contact" component={contact}/>
    </Router>
  );
}

export default App;
