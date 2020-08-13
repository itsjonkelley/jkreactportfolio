import React from 'react';
import {BrowserRouter as Router, Route, HashRouter} from "react-router-dom";
import about from './containers/about';
import projects from './containers/projects';
import contact from "./containers/contact";
import './style.css';


function App() {
  return (
    <HashRouter basename='/'>
      <Route exact path="/" component={about}/>
      <Route exact path="/about" component={about}/>
      <Route exact path="/projects" component={projects}/>
      <Route exact path="/contact" component={contact}/>
    </HashRouter>
  );
}

export default App;
