import React from 'react'
import "./Box.css"
import { useState } from 'react'


function Box() {
    const [color, setColor] = useState(true)

    const style = color
    ? { background: "pink" }
    : { background: "green" };

    const handleClick = () => {
        setColor(!color);
    }

    return (
        
            <div className="center" >
                <div className="box" style={style} onClick={handleClick}>The Box</div>
            </div>
    
    );


}

export default Box;
