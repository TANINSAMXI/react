import PropTypes from "prop-types";

const Add = ({ newTodoText, addTodo, handleInputChange }) => {
  return (
    <div className="add">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(newTodoText);
        }}
      >
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
};

Add.propTypes = {
  newTodoText: PropTypes.string.isRequired,
  addTodo: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Add;
