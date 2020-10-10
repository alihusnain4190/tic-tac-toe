import React from "react";
const DrawGame = (props) => {
    console.log(props)  
     if (
            (props.countX === 5 &&props.countO === 4 &&props.winner === false) ||
            (props.countO === 5 && props.countX === 4 &&props.winner === false)
          ) {
            // state.winner = false;
            return <h1>Draw!!!!</h1>;
           }
         return <h2></h2>
         
        
}
export default DrawGame;