import React, { Component } from 'react'
class BasicInfo extends Component{
  render(){
    return (
    <ul>
      <li>My name is {this.props.info.person.name}</li>
      <li>I am {this.props.info.person.age} years old</li>
      <li>I live in {this.props.info.person.state}</li>
    </ul>
    );
  }
}

export default BasicInfo;
