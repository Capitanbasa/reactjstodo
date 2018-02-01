import React, { Component } from 'react';
import uuid from 'uuid';
import Todos from './todos';
import AddTodo from './addtodo';
import NavMenu from './navmenu';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        todos : []
    }

  }
  deleteTodo(id){
    // this.setState({
    //   todos : this.state.todos.filter(function(e,i){
    //     return i !== index;
    //   })
    // });
    let todos = this.state.todos;
    let index = todos.findIndex(x => x.id === id);
    todos.splice(index, 1);
    this.setState({todos : todos});
  }
  handleAddTodos(newTodos){
    let todos = this.state.todos;
    todos.push(newTodos);
    this.setState({todos : todos});
  }
  
  componentWillMount(){ 
    this.setState({ todos : [
        {
            id : uuid.v4(),
            title : 'Monday todo',
            responsible : 'hercival',
            description : 'Description for monday todo content goes here',
            priority : 'low'
        },
        {
          id : uuid.v4(),
          title : 'Tuesday todo',
          responsible : 'hercival',
          description : 'Description for Tuesday todo take out garbage that pickup by trash collector',
          priority : 'high'
        },
        {
          id : uuid.v4(),
          title : 'Wednesday todo',
          responsible : 'lee',
          description : 'Description for Wednesday todo are normal days',
          priority : 'medium'
        },
        {
          id : uuid.v4(),
          title : 'Thursday todo',
          responsible : 'Hyundai',
          description : 'Description for Thursday todo are normal days',
          priority : 'high'
        }
    ]});
  }
  render() {
    return (
      <div>
        
        <NavMenu />
        <AddTodo addTodos={this.handleAddTodos.bind(this)}/>
        <h4>Todo Count : <span className="badge">{this.state.todos.length}</span></h4>
        <div className="row">
          <Todos onDelete={this.deleteTodo.bind(this)} todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
