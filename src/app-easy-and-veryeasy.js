/* EASY  ANd Very Version
  Very Easy:
    Create a App Class and hardcode a div with some arbitrary user date
  Easy:
    Create a constructor with
      -super call
      -this.state intitialized with a empty person object
*/
import React, { Component } from 'react'



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      //Easy
      person :
       {
        }
    };
  }
  render () {
    return (
    <div>
    <h2> Easy and Very Easy </h2>
    <ul>
      <li>My name is Justin</li>
      <li>I am 24 years old</li>
      <li>I live in North Carolina</li>
    </ul>
    </div>
  );
  }
}

/* export the component to be used in other components */
export default App;
