import React from 'react'
import "./Box.css"


function Box({color}) {
    return (
        <div>
        <div className="box" style={{background: color}}>The {color} Box</div>
         <button className="button">lock me</button></div>
    );
}

export default Box;
