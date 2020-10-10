import React from "react";

class Winner extends React.Component{
  state={
  winner:false,
  }
  render() {
    if (
          this.props.value[0] === this.props.value[1] &&
          this.props.value[0] === this.props.value[2]
        ) {
          if (this.props.value[0] === "X") {
           this.state.winner= true;
          return <h1>X is the Winner!!!</h1>;
          }else if (this.props.value[0] === "O") {
           this.state.winner= true;
          return <h1>O is the Winner!!!</h1>;
             }
    }
        if (
      this.props.value[3] === this.props.value[4] &&
      this.props.value[3] === this.props.value[5]
    ) {
      if (this.props.value[3] === "X") {
        this.state.winner= true;
        return <h1>X is the Winner!!!</h1>;
      } else if (this.props.value[3] === "O") {
        this.state.winner= true;
        return <h1>O is the Winner!!!</h1>;
      }
    }

    if (
      this.props.value[6] === this.props.value[7] &&
      this.props.value[6] === this.props.value[8]
    ) {
      if (this.props.value[6] === "X") {
        this.state.winner = true;
        return <h1>X is the Winner!!!</h1>;
      } else if (this.props.value[6] === "O") {
        this.state.winner = true;
        return <h1>O is the Winner!!!</h1>;
      }
    }
  //   //collum winner

    if (
      this.props.value[0] === this.props.value[3] &&
      this.props.value[0] === this.props.value[6]
    ) {
      if (this.props.value[0] === "X") {
        this.state.winner = true;
        return <h1>X is the Winner!!!</h1>;
      } else if (this.props.value[0] === "O") {
        this.state.winner= true;
        return <h1>O is the Winner!!!</h1>;
      }
    }

    if (
      this.props.value[1] === this.props.value[4] &&
      this.props.value[1] === this.props.value[7]
    ) {
      if (this.props.value[1] === "X") {
        this.state.winner= true;
        return <h1>X is the Winner!!!</h1>;
      } else if (this.props.value[1] === "O") {
        this.state.winner = true;
        return <h1>O is the Winner!!!</h1>;
      }
    }

    if (
      this.props.value[2] === this.props.value[5] &&
      this.props.value[2] === this.props.value[8]
    ) {
      if (this.props.value[2] === "X") {
        this.state.winner = true;
        return <h1>X is the Winner!!!</h1>;
      } else if (this.props.value[2] === "O") {
        this.state.winner = true;
        return <h1>O is the Winner!!!</h1>;
      }
      //diaganal winner
    }
   
    if (
     this.props.value[0] ===this.props.value[4] &&
     this.props.value[0] ===this.props.value[8]
    )
    {
       if (this.props.value[0] === "X") {
         this.winner = true;
         return <h1>X is the Winner!!!</h1>;
       } else if (this.props.value[0] === "O") {
         this.winner = true;
         return <h1>O is the Winner!!!</h1>;
       }
     }
 
     if (
      this.props.value[2] ===this.props.value[4] &&
      this.props.value[2] ===this.props.value[6]
     )
     {
       if (this.props.value[2] === "X") {
         this.state.winner = true;
         return <h1>X is the Winner!!!</h1>;
       } else if (this.props.value[2] === "O") {
         this.state.winner = true;
         return <h1>O is the Winner!!!</h1>;
       }
     }
     if (
      (this.props.countX === 5 &&this.props.countO === 4 &&this.state.winner === false) ||
      (this.state.countO === 5 && this.props.countX === 4 &&this.state.winner === false)
    ) {
      return <h1>Draw!!!!</h1>;
     }
   return <h2></h2>
    }
} 
  

  
export default Winner;
