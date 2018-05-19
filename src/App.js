import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // To give our component 'state', we'll start by adding a 'constructor' to add
  // the component class add constructor keyword
  constructor() {
    // We'll want to call 'super' to make sure that the constructor for the component 
    // class that we're extending is called.
    super()
    // now we can define the 'state' for this component
    // and set that to equal an empty object. The state object
    // will contain whatever data structure or components needs to
    // render properly. In our case, this will include a list of todos
    this.state = {
      // an array of 'todos' containing a list of objects,
      // each object representing a todo.
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: true},
        {id: 2, name: 'Build an Awesome App', isComplete: false},
        {id: 3, name: 'Ship it!', isComplete: false}
      ]
      // open chrome react-dev tool and view the array with state to verify
    }
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
            <input type="text" />
          </form>
          <div>
            <ul>
              {/* you will see this Warning: Each child in an array or iterator should have a unique "key" prop. 
                to fix it, use the key property. In this case, we'll use 'id' as the key
              */}
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
