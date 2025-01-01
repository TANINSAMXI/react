import React from "react";
import PropTypes from "prop-types";

class Result extends React.Component {
  render() {
    return (
      <div className="mt-4 p-3 border bg-light">
        <h2>Best Smile:-)</h2>
        <span className="fs-1">{this.props.winner.symbol}</span>
        <p className="mt-2">with {this.props.winner.votes} votes!</p>
      </div>
    );
  }
}

Result.propTypes = {
  winner: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Result;
