import SmilesList from "./components/SmilesList.jsx";
import ShowResults from "./components/Result.jsx";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emojis: [
        { id: 1, symbol: "😈", votes: 0 },
        { id: 2, symbol: "👹", votes: 0 },
        { id: 3, symbol: "⃝💀", votes: 0 },
        { id: 4, symbol: "🥶", votes: 0 },
        { id: 5, symbol: "👽", votes: 0 },
      ],
      winner: null,
    };

    this.handleVote = this.handleVote.bind(this);
    this.showResults = this.showResults.bind(this);
  }

  handleVote(id) {
    const updatedEmojis = this.state.emojis.map((emoji) => {
      if (emoji.id === id) {
        return { ...emoji, votes: emoji.votes + 1 };
      }
      return emoji;
    });

    this.setState({ emojis: updatedEmojis });
  }

  showResults() {
    const allVotesZero = this.state.emojis.every((emoji) => emoji.votes === 0);

    if (allVotesZero) {
      this.setState({ winner: null });
      return;
    }

    const winnerEmoji = this.state.emojis.reduce((prev, current) => {
      return prev.votes > current.votes ? prev : current;
    });

    this.setState({ winner: winnerEmoji });
  }

  render() {
    return (
      <div className="container text-center mt-4">
        <h1 className="mb-4">Best of the best</h1>
        <SmilesList emojis={this.state.emojis} onVote={this.handleVote} />
        <button className="btn btn-primary mt-4" onClick={this.showResults}>
          Show Results
        </button>
        {this.state.winner && <ShowResults winner={this.state.winner} />}
      </div>
    );
  }
}

export default App;
