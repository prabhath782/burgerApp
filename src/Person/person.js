import React, { Component } from 'react';
import './person.css';
import Radium,{StyleRoot} from "radium";

class Person extends Component {
  render() {
    return (
      <div className = "person">        
        <p>Hello Person  {this.props.name} aged {this.props.age}</p>
        <input className = 'inputBox' type = 'text' onChange = {this.props.click}/>        
        </div>      
    );
  }
}



export default Person;