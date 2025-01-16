import React from "react";
import PropTypes from "prop-types";

class Add extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { newTodoText, addTodo } = this.props;
    addTodo(newTodoText);
  };

  render() {
    const { newTodoText, handleInputChange } = this.props;

    return (
      <div className="add">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => handleInputChange(e)}
            placeholder="Add your task"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

Add.propTypes = {
  newTodoText: PropTypes.string.isRequired,
  addTodo: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Add;
