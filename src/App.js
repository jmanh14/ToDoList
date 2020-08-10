import React, { Component } from 'react';
import Header from './components/Layout/Header';
import ToDos from './components/ToDos';
import AddToDo from './components/AddToDo';
import uuid from 'uuid';
import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }
  //Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })
  });
  }

  //Delete ToDo
  delToDo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  //Add ToDo
  addToDo = (title) => {
    const newToDo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newToDo]});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <Header/>
        <AddToDo addToDo={this.addToDo}/>
        <ToDos todos = {this.state.todos} markComplete={this.markComplete}
        delToDo={this.delToDo}/>
        </div>

      </div>
    );
  }
}

export default App;
