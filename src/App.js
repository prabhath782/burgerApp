import React, { Component } from 'react';
import  Person  from './Person/person'
import './App.css';

class App extends Component {
  state ={
    persons:[
      {
        name:'Teja',
        age:23,
        id:100
      },
      {
        name:'prabhath',
        age:28,
        id:200
      }
    ],
    check:false
  }

  componentWillMount(){
    this.setState({
      check:!this.state.check
    })
  }

  switchNameHandler = (event,id)=>{
    const personIndex = this.state.persons.findIndex((person)=>{
      return person.id === id;
    });

    
     const person = {
       ...this.state.persons[personIndex]
     }

     person.name = event.target.value;

     const persons = [...this.state.persons];
     persons[personIndex] = person;
    this.setState({
      persons:persons
    })
  }

  showPerson = ()=>{
    this.setState({
   check:!this.state.check   
    })
  }

  render() {

    const style = {

      background:'green',
      color:'white',
      border:'1px solid blue',
      padding:'8px',
      ':hover':{
        background:'lightgreen'
      }
    }

    return (
      
      <div className="App">
        <header className="App-header">
            <h1> React World </h1>
            
        </header>
        {
          this.state.check ?        
          <div className = 'personBox'>

          {
            this.state.persons.map((person)=>{
             
              return <Person 
              name = {person.name}
              age = { person.age}
              key = {person.id}              
              click = {(event)=>this.switchNameHandler(event,person.id)}>                               
              </Person>

            })
          }

          </div>    
          :null
        }

        <button style ={style} className = "toggleButton" onClick = {this.showPerson} > show persons</button>
      
        <div className = "footerDiv">


        <footer>            
          <p>
            <i class="fa fa-twitter"></i>
              @prabhath_tej
            </p>
           <p><i class = "fa fa-phone"> </i>
              660-528-0716           
           </p>
           <p><i class = "fa fa-home"> </i>
             San Francisco
          </p>            
        </footer>
        </div>
        
      </div>
      
    );
  }
}

export default App;
