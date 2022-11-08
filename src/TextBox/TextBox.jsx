import React from 'react'
import { useState } from 'react'
import "./TextBox.css"
import Box from "../Box/Box"



function TextBox() {
    const [color, setColor] = useState(true)
    const [boxText, setBoxText] = useState("pink")

    const toggleColor = () => {
        setColor(!color)
        setBoxText( boxText==="pink" ? "green" : "pink")
    }

return ( 
    <div className="center">
        <div className="boxtext">The Color is {boxText}</div>
        <button className="button" onClick={toggleColor}>toggle</button>
            <Box 
                toggleColor={toggleColor}
                color = {color}  
                toLog = {(text) => console.log(text)}
            />
    </div>    
)
}







export default TextBox; 

