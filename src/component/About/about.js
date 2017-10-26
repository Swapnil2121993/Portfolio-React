import React, {Component} from 'react';
import Header from '../Header/header';
import './abour.css';

export default class About extends Component{
  render(){
    return(
      <div className="container">
      <Header/>
      <h3>About Me</h3>
      <p>Front End Engineer with recent experience in React/Redux, Angular 2. An individual with strong technical background and ability to learn and adapt quickly in a dynamic environment.
      Excellent communication skills and a great team player as well as individual contributor. Strong analytical and problem solving skills,
      ability to think critically, and multitask. Able to work under tight deadlines with great attention to detail.</p>

      <p>
      At my most recent project at Inquisithealth we built mentor platform for health disease which focuses on improvement of health outcomes.  My team was mostly responsible for developing modular JavaScript components for Inquisithealth 1-to-1 Mentor web application and administritive platform on this project. We used HTML5 and CSS3, JSON and media queries for responsiveness.  We primarily use AJAX, JSON and Restful web service for handling request on server and fetch data from server.  The primary framework that we used was React to develop fast user-interface.
      </p>

      <p>
      The project  on which i was working during my internship, i.e. to convert angular application into React application.
      I was handling this project alone and ask questions when I have them to my mentor.
      The reason I like this project most is because I was learning two frameworks - <mark>Angular</mark> and <mark>React-Redux</mark> at the same time.
      </p>

    </div>
    )
  }
}
