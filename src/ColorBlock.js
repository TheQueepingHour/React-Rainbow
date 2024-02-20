import React from "react";

function ColorBlock(props) {
    return (
        <div className="colorBlock" style={{'backgroundColor': props.color, 'border': '1px solid black'}}>
            <p>{props.color}</p>
        </div>
    )
}

export default ColorBlock