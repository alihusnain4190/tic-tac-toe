import React from "react";

const PlayeAgain = (props) => {

  return (
    <button className="reset" onClick={props.resetBoard}>
     Playe Again
    </button>
  );
};
export default PlayeAgain;
