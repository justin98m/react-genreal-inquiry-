/* Hard Version
Pass state to Basic Info
Where State holds a list of objects
where each object is a person  showing their name , age and state of residence
*/
import React, { Component } from 'react'
import BasicInfo from './basicInfo-medium.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      //hard
      person :
       {
          name: "Justin",
          age: 24,
          state: "North Carolina"
        }
    };
  }
  render () {
    return (
    <div>
    <h2> Medium </h2>
    <BasicInfo info={this.state}/>
    </div>
  );
  }
}

/* export the component to be used in other components */
export default App;
