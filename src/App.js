import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from "./logo.svg";
import "./App.css";
import { TodoForm, TodoList, Footer } from "./components/todo";
import {
  addTodo,
  generateId,
  findById,
  toggleTodo,
  updateTodo,
  removeTodo,
  filterTodos
} from "./lib/todoHelpers";
import { pipe, partial } from "./lib/utils";

class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Learn JSX", isComplete: true },
      { id: 2, name: "Build an Awesome App", isComplete: false },
      { id: 3, name: "Ship it!", isComplete: false }
    ],
    currentTodo: ""
  };

  static contextTypes = {
      route: PropTypes.string
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const newId = generateId();
    const newTodo = {
      id: newId,
      name: this.state.currentTodo,
      isComplete: false
    };
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: "",
      errorMessage: ""
    });
  };

  handleEmptySubmit = evt => {
    evt.preventDefault();
    // if this method gets called it means you're trying to submit an empty todo name
    this.setState({
      errorMessage: "Please supply a todo name"
    });
  };

  handleRemove = (id, evt) => {
    evt.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({
      todos: updatedTodos
    });
  };

  handleToggle = id => {
    const getUpdatedTodos = pipe(
      findById,
      toggleTodo,
      partial(updateTodo, this.state.todos)
    );
    const updatedTodos = getUpdatedTodos(id, this.state.todos);
    this.setState({
      todos: updatedTodos
    });
  };

  handleInputChange = evt => {
    this.setState({
      currentTodo: evt.target.value
    });
  };
  render() {
    const submitHandler = this.state.currentTodo
      ? this.handleSubmit
      : this.handleEmptySubmit;
    const displayTodos = filterTodos(this.state.todos, this.context.route)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </header>
        <div className="Todo-App">
          {this.state.errorMessage && (
            <span className="error">{this.state.errorMessage}</span>
          )}
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            handleSubmit={submitHandler}
          />
          <TodoList
            handleToggle={this.handleToggle}
            handleRemove={this.handleRemove}
            todos={displayTodos}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
