import React,{Component} from 'react';
import './home.css';
import picture from '../../asset/swapnil.jpg';
import Header from '../Header/header';
import Footer from '../Footer/footer';


export default class Home extends Component{
    constructor(props){
      super(props);
      this.state={

      }
    }


    handleClick=()=>(
      this.props.history.push("/contact")
    );



  render(){
    return(
      <div className="container">
      <Header/>
      <h1> Hello, I am a Front End Developer</h1>
      <img src={picture} className="profile" alt="text"/>
        <h2> Swapnil Trivedi </h2>
        <h2> MS Computer Science</h2>
        <h2> New York Institute of Technology, New York, USA </h2>

        <div>
          <button className="button" onClick={this.handleClick.bind(this)}> I am looking to hire > </button>
        </div>

      <Footer/>

      <p>&copy; swapnil.me 2017 </p>



      </div>
    )
  }
}
