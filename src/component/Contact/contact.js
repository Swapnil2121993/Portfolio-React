import React, {Component} from 'react';
import picture from '../../asset/swapnil.jpg';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import Map from './map';
import './contact.css';

export default class extends Component{
    constructor(props){
      super(props);
      this.state={
        name:"Name ",
        email:"Email",
        phone:"Phone",
        message:"Message",
      };
      this.handleChange=this.handleChange.bind(this);
  }
    handleChange(e) {
        e.preventDefault();
        this.setState({[e.target.name]:e.target.value});
    }
      render(){
        return(
          <div>
            <Header/>
            <Map/>
              <img src={picture} className="position" alt="text"/>
              <button className="btn btn-danger" id="btn">+1(281)-912-9299</button>
          <div id="ftr">
            <Footer/>
        </div>

        <div className="contact">
          <input type="text" name="name"  onChange={this.handleChange} value={this.state.name} required/>&nbsp;
          <input type="text" name="email" onChange={this.handleChange} value={this.state.email} required/>&nbsp;
          <input type="text" name="phone" onChange={this.handleChange} value={this.state.phone} required/>&nbsp;
          <textarea rows="5" cols="70" style={{marginBottom:-150, marginLeft:-530}} name="message" onChange={this.handleChange} value={this.state.message}></textarea>
      </div>

      <button className="btn btn-success" style={{marginBottom:-350, marginLeft:900}}>Send </button>
</div>
    )
  }
}
