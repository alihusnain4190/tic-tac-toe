import React from "react";
class Winner extends React.Component{
  state={
    result: '',
    player1: 0,
    player2:0

}
  componentDidMount = () => {
    let player2 = localStorage.getItem('player2');

    let player1 = localStorage.getItem('player1');

    console.log(player1)

    console.log(player2)
    if (player1 && player2) {
       player1 = JSON.parse(player1);
       player2 = JSON.parse(player2);
      this.setState(() => { 
        return {
          player1: player1,
          player2: player2
        }
      })      
    }
}
  handleWinner = (result) => {
    let player1 = 0;
    let player2 = 0;
    if (result == 'X') {
      player1 = this.state.player1++;
      player2 = this.state.player2;
     
    }
    else {
      player2 = this.state.player2++;
      player1 = this.state.player1;
     
    }


    this.props.winnerValue(true,result);
    this.saveData();
   
    this.setState((prev) => {
      return {
        result:result,
        player1: player1,
        player2:player2}
       
    })
  
  }
  saveData = () => {
    localStorage.setItem('player1', JSON.parse(this.state.player1))
    
    localStorage.setItem('player2',JSON.parse(this.state.player2))
  }
  resetHandler = () => {
    localStorage.clear();
    this.setState(() => {
      return {
        player1: 0,
        player2:0
    }
    })
  }
  render() {
    if (this.props.winner === false) {
      if (
        this.props.value[0] === this.props.value[1] &&
        this.props.value[0] === this.props.value[2]
      ) {
        if (this.props.value[0] === "X") {
          // this.props.winner = true;
      
          return <h1 onChange={this.handleWinner("X")}>X is the Winner!!!</h1>;
        } else if (this.props.value[0] === "O") {
          // this.props.winner = true;
          return <h1 onChange={this.handleWinner("O")}>O is the Winner!!!</h1>;
        }
      }
      if (
        this.props.value[3] === this.props.value[4] &&
        this.props.value[3] === this.props.value[5]
      ) {
        if (this.props.value[3] === "X") {
          // this.props.winner = true;
          return <h1 onChange={this.handleWinner("X")} >X is the Winner!!!</h1>;
        } else if (this.props.value[3] === "O") {
          // this.props.winner = true;
          return <h1 onChange={this.handleWinner("O")}>O is the Winner!!!</h1>;
        }
      }

      if (
        this.props.value[6] === this.props.value[7] &&
        this.props.value[6] === this.props.value[8]
      ) {
        if (this.props.value[6] === "X") {
          // this.props.winner = true;
          return <h1 onChange={this.handleWinner("X")}>X is the Winner!!!</h1>;
        } else if (this.props.value[6] === "O") {
          // this.props.winner = true;
          return <h1 onChange={this.handleWinner("O")}>O is the Winner!!!</h1>;
        }
      }
      //   //collum winner

      if (
        this.props.value[0] === this.props.value[3] &&
        this.props.value[0] === this.props.value[6]
      ) {
        if (this.props.value[0] === "X") {
         // this.state.winner = true;
          return <h1 onChange={this.handleWinner("X")}>X is the Winner!!!</h1>;
        } else if (this.props.value[0] === "O") {
          //this.state.winner = true;
          return <h1 onChange={this.handleWinner("O")}>O is the Winner!!!</h1>;
        }
      }

      if (
        this.props.value[1] === this.props.value[4] &&
        this.props.value[1] === this.props.value[7]
      ) {
        if (this.props.value[1] === "X") {
         // this.state.winner = true;
          return <h1 onChange={this.handleWinner("X")}>X is the Winner!!!</h1>;
        } else if (this.props.value[1] === "O") {
         /// this.state.winner = true;
          return <h1 onChange={this.handleWinner("O")}>O is the Winner!!!</h1>;
        }
      }

      if (
        this.props.value[2] === this.props.value[5] &&
        this.props.value[2] === this.props.value[8]
      ) {
        if (this.props.value[2] === "X") {
         // this.state.winner = true;
          return <h1 onChange={this.handleWinner("X")}>X is the Winner!!!</h1>;
        } else if (this.props.value[2] === "O") {
         // this.state.winner = true;
          return <h1 onChange={this.handleWinner("O")}>O is the Winner!!!</h1>;
        }
        //diaganal winner
      }
   
      if (
        this.props.value[0] === this.props.value[4] &&
        this.props.value[0] === this.props.value[8]
      ) {
        if (this.props.value[0] === "X") {
         // this.winner = true;
          return <h1 onChange={this.handleWinner("X")}>X is the Winner!!!</h1>;
        } else if (this.props.value[0] === "O") {
        //  this.winner = true;
          return <h1 onChange={this.handleWinner("O")}>O is the Winner!!!</h1>;
        }
      }
 
      if (
        this.props.value[2] === this.props.value[4] &&
        this.props.value[2] === this.props.value[6]
      ) {
        if (this.props.value[2] === "X") {
          // this.state.winner = true;
          return <h1 onChange={this.handleWinner("X")}>X is the Winner!!!</h1>;
        } else if (this.props.value[2] === "O") {
          // this.state.winner = true;
          return <h1 onChange={this.handleWinner("O")}>O is the Winner!!!</h1>;
        }
      }
    }
    else {
      return(<div className="player">
      <h1 >{this.state.result} winner</h1>
      <div className="player-display">
  
            <p className="player-score">firstPlayer Score {this.state.player1}</p>
            <p className="player-score">secondPlayer Score {this.state.player2}</p>
        
      </div>
      <div>
        <button className="btn-reset" onClick={this.resetHandler}>Reset Game</button>
          
            </div>
      </div>)
    }
    return(<div className="player">
    <h1 >Game Start</h1>
    <div className="player-display">

          <p className="player-score">firstPlayer Score {this.state.player1}</p>
          <p className="player-score">secondPlayer Score {this.state.player2}</p>
    </div>
    <div>
      <button className="btn-reset" onClick={this.resetHandler}>Reset Game</button>
        
          </div>
    
    </div>)
  }
} 
  

  
export default Winner;
