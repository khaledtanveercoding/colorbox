import React from 'react'
import "./Box.css"
import { useState } from 'react'
import TextBox from "../TextBox/TextBox"

function Box({toggleColor, color, number, toLog}) {
    const style = color ? { background:"pink" } : {background:"green" }
    return (                
        <div className="box" style={style} onClick={() => {
            toggleColor();
            toLog('sup');
        }}>The Box</div>
    );
}

export default Box;
