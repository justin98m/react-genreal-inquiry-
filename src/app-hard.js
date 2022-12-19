/* Hard Version
Pass state to Basic Info
Where State holds a list of objects
where each object is a person  showing their name , age and state of residence
*/
import React, { Component } from 'react'
import BasicInfo from './basicInfo-hard.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      //hard
      people :[
       {
          name: "Justin",
          age: 24,
          state: "North Carolina"
        },
        {
          name: "Joshua",
          age: 27,
          state: "Texas"
        },
        {
          name: "Jada",
          age: 16,
          state: "North Carolina"
        },
        {
          name: "Trey",
          age: 14,
          state: "North Carolina"
        },
        {
          name: "Raylette",
          age: 44,
          state: "North Carolina"
        },
        {
          name: "Selena",
          age: 53,
          state: "Maryland"
        },
        {
          name: "Charlie",
          age: 55,
          state: "New York"
        },
      ]
    }
  }
  render () {
    return (
      <div>
        <h2> Hard </h2>
        <BasicInfo info={this.state}/>
      </div>
    );
  }
}

/* export the component to be used in other components */
export default App;
