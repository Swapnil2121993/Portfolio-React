import React,{Component} from 'react';
import './footer.css';

export default class Footer extends Component{
  render(){
    return(
      <div className="footer">
        <a href="http://www.github.com/Swapnil2121993"><i className="fa fa-github" aria-hidden="true"/></a>&nbsp;
        <i className="fa fa-skype" aria-hidden="true"/>&nbsp;
        <a href="http://www.linkedin.com/in/swapnil21">  <i className="fa fa-linkedin" aria-hidden="true"/></a>&nbsp;
        <i className="fa fa-envelope" aria-hidden="true"/>&nbsp;
      </div>
    )
  }
}
