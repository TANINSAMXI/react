import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
  render() {
    const { activeTasks } = this.props;
    return (
      <header className="header">
        <h1>Task List</h1>
        <p>Active : {activeTasks}</p>
      </header>
    );
  }
}

Header.propTypes = {
  activeTasks: PropTypes.number.isRequired,
};

export default Header;
