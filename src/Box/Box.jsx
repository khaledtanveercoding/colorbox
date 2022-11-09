import React from 'react'
import "./Box.css"


function Box({color}) {
    return (
        <div className="box" style={{background: color}}>The {color} Box</div>
    );
}

export default Box;
