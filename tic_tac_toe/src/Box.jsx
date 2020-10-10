import React from "react";
const Box = (props) => {
   
    if (props.winner === false) {
        return (
            <button className="btn" onClick={props.handleArr}>{props.value}</button>
        )
    }
    else {
        return <button className="btn" >{props.value}</button>
    }
}
export default Box;