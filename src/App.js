import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: true},
        {id: 2, name: 'Build an Awesome App', isComplete: false},
        {id: 3, name: 'Ship it!', isComplete: false}
      ],
      currentTodo: ''
    }
    // bind
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  // create an event handler that can capture the input and assign the value to the currentTodo state
  handleInputChange(evt) {
    this.setState({
      currentTodo: evt.target.value
    })
    // Now we need to reference it in our current constructor and bind it to 'this'
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </header>
        <div className="Todo-App">
          <form>
            {/* open react-dev tools and view the state currentTodo change */}
            <input type="text" onChange={this.handleInputChange} value={this.state.currentTodo} />
          </form>
          <div>
            <ul>
              {this.state.todos.map(todo => 
                <li key={todo.id}>
                  <input type="checkbox" defaultChecked={todo.isComplete} /> {todo.name}
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
