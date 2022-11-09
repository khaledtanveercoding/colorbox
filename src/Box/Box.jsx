import React from 'react'
import "./Box.css"
import { useState, useContext } from 'react'
import TextBox, { ToggleContext } from "../TextBox/TextBox"

function Box({ toggleColor, color}) {
    const toggleValue = useContext(ToggleContext);
    const style = toggleValue ? { background: color } : { background: toggleColor }
    return (
        <div className="box" style={style} onClick={() => {
        }}>The Box</div>
    );
}

export default Box;
