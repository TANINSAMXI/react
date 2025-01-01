import React from "react";
import PropTypes from "prop-types";

class SmilesList extends React.Component {
  render() {
    const emojiItems = this.props.emojis.map((emoji) => (
      <div
        key={emoji.id}
        className="d-flex justify-content-between align-items-center border p-2 mb-2"
      >
        <span className="fs-3">{emoji.symbol}</span>
        <span>Votes: {emoji.votes}</span>
        <button
          className="btn btn-success"
          onClick={() => this.props.onVote(emoji.id)}
        >
          Vote
        </button>
      </div>
    ));

    return <div>{emojiItems}</div>;
  }
}

SmilesList.propTypes = {
  emojis: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      symbol: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onVote: PropTypes.func.isRequired,
};

export default SmilesList;
