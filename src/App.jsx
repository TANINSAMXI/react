import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Add from "./components/Add.jsx";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [],
    newTodoText: "",
  };

  addTodo = (text) => {
    if (text.trim() === "") {
      alert("Write your task first!");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
      newTodoText: "",
    }));
  };

  toggleTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  handleInputChange = (e) => {
    this.setState({ newTodoText: e.target.value });
  };

  render() {
    const { todos, newTodoText } = this.state;
    return (
      <div className="App">
        <Header activeTasks={todos.filter((todo) => !todo.completed).length} />
        <TodoList todos={todos} toggleTodo={this.toggleTodo} />
        <Add
          newTodoText={newTodoText}
          addTodo={this.addTodo}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default App;
