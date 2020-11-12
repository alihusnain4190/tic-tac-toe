import React from "react";
import "./App.css";
import Box from "./components/Box";
import Winner from "./components/Winner";
import PlayeAgain from "./components/PlayeAgain";
import DrawGame from "./components/DrawGame";
class App extends React.Component {
  state = {
    board: Array(9).fill(null),
    isActive: true,
    gameOver: "gameover",
    winner: false,
    countX: 0,
    countO: 0,
  };

  resetBoard = (winner) => {
    let newArr = Array(9).fill(null);
    this.setState((prevState) => {
      return {
        countX: 0,
        countO: 0,
        winner: false,
        board: newArr,
        isActive: true,
      };
    });
  };

  handleArr = (val) => {
    let newBoard = [...this.state.board];
    // change player x to o
    let active = this.state.isActive;
    /// for Count Increment
    let xCount = this.state.countX++;
    let oCount = this.state.countO++;
    if (this.state.isActive === true && newBoard[val] === null) {
      newBoard[val] = "X";
      xCount++;
      active = false;
    } else if (newBoard[val] === null) {
      newBoard[val] = "O";
      oCount++;
      active = true;
    } else {
      return {
        countX: xCount,
        countO: oCount,
        board: newBoard,
        isActive: active,
      };
    }

    this.setState((prevState) => {
      return {
        countX: xCount,
        countO: oCount,
        board: newBoard,
        isActive: active,
      };
    });
  };
  winnerValue = (value) => {
    console.log(value);
    this.setState((prev) => {
      return {
        winner: true,
      };
    });
  };
  render() {
    return (
      <div className="gameboard">
        <Winner
          winnerValue={() => {
            this.winnerValue(false);
          }}
          countX={this.state.countX}
          countO={this.state.countO}
          value={this.state.board}
          winner={this.state.winner}
          gameover={this.state.gameOver}
        ></Winner>

        <DrawGame
          countX={this.state.countX}
          countO={this.state.countO}
          winner={this.state.winner}
        ></DrawGame>
        <div className="game">
          <Box
            winner={this.state.winner}
            value={this.state.board[0]}
            handleArr={() => this.handleArr(0)}
          ></Box>
          <Box
            winner={this.state.winner}
            value={this.state.board[1]}
            handleArr={() => this.handleArr(1)}
          ></Box>
          <Box
            winner={this.state.winner}
            value={this.state.board[2]}
            handleArr={() => this.handleArr(2)}
          ></Box>

          <Box
            winner={this.state.winner}
            value={this.state.board[3]}
            handleArr={() => this.handleArr(3)}
          ></Box>
          <Box
            winner={this.state.winner}
            value={this.state.board[4]}
            handleArr={() => this.handleArr(4)}
          ></Box>
          <Box
            winner={this.state.winner}
            value={this.state.board[5]}
            handleArr={() => this.handleArr(5)}
          ></Box>

          <Box
            winner={this.state.winner}
            value={this.state.board[6]}
            handleArr={() => this.handleArr(6)}
          ></Box>
          <Box
            winner={this.state.winner}
            value={this.state.board[7]}
            handleArr={() => this.handleArr(7)}
          ></Box>
          <Box
            winner={this.state.winner}
            value={this.state.board[8]}
            handleArr={() => this.handleArr(8)}
          ></Box>
        </div>
        <PlayeAgain
          resetBoard={() => {
            this.resetBoard(false);
          }}
        ></PlayeAgain>
      </div>
    );
  }
}

export default App;
