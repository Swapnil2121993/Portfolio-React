import React,{Component} from 'react';
import './header.css';

export default class Header extends Component {
   render(){
     return(
          <nav className="navbar-navbar default">
            <div className="container-fluid">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/experience">Experience</a></li>
                <li><a href="/project">Project</a></li>
                <li><a href="/contact">Contact</a></li>
             </ul>
          </div>
            <hr/>
        </nav>


     )
   }
}
