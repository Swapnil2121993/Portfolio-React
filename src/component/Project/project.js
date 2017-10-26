import React, {Component} from 'react';
import Header from '../Header/header';
import './project.css';

export default class Project extends Component{
    render(){
      return(
        <div>
        <Header/>
        <h2> Recent Projects: Sample of some of my work </h2>

        <div id="box1">
        <h3> Student Online Portal </h3>
        <div id="project">
        <a href="https://github.com/Swapnil2121993/React-Redux"> See Project </a>
        </div>
        </div>
  

        <div id="box2">
        <h3> Course Managment Application </h3>
        <div id="project">
        <a href="https://github.com/Swapnil2121993/Angular-2"> See Project </a>
        </div>
        </div>

        <div id="box3">
        <h3>React/Front end Task </h3>
        <div id="project">
        <a href="https://github.com/Swapnil2121993/React-Enzyme"> See Project </a>
        </div>
        </div>

        <div id="box4">
        <h3>Authorized Signer Detail</h3>
        <div id="project">
        <a href="https://github.com/Swapnil2121993/Authorized-Signer-detail-angular-2"> See Project </a>
        </div>
        </div>

        <div id="box5">
        <h3>Car-Tracker</h3>
        <div id="project">
        <a href="https://github.com/Swapnil2121993/Car-Tracker"> See Project </a>
        </div>
        </div>

    </div>
      )


    }
}
