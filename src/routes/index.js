import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../component/Home/home';
import About from '../component/About/about';
import Contact from '../component/Contact/contact';
import Project from '../component/Project/project';


export default () =>(
  <BrowserRouter>
  <Switch>
  <Route path="/" exact component={Home}/>
  <Route path="/home" exact component={Home}/>
  <Route path="/about" exact component={About}/>
  <Route path="/contact" exact component={Contact}/>
  <Route path="/project" exact component={Project}/>

  </Switch>
  </BrowserRouter>
);
