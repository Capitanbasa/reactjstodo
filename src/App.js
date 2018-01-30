import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        projects : []
    }
  }
  componentWillMount(){ 
    this.setState({ projects : [
        {
            title : 'Monday todo',
            responsible : 'hercival',
            description : 'Description for monday todo content goes here',
            priority : 'low'
        },
        {
          title : 'Tuesday todo',
          responsible : 'hercival',
          description : 'Description for Tuesday todo take out garbage that pickup by trash collector',
          priority : 'high'
        },
        {
          title : 'Wednesday todo',
          responsible : 'lee',
          description : 'Description for Wednesday todo are normal days',
          priority : 'medium'
        },
        {
          title : 'Thursday todo',
          responsible : 'Hyundai',
          description : 'Description for Thursday todo are normal days',
          priority : 'high'
        }
    ]});
  }
  render() {
    return (
      <div></div>
    );
  }
}

export default App;
