import React from 'react'
import { useState } from 'react'
import "./TextBox.css"
import Box from "../Box/Box"



function TextBox() {
    const [color, setColor] = useState(true)
    const [boxText, setBoxText] = useState("pink")
    const [number, setNumber] = useState(1) 

    const toggleColor = () => {
        setColor(!color)
        setBoxText( boxText==="pink" ? "green" : "pink")
    }

return ( 
    <div className="center">
        <div className="boxtext">The Color is {boxText}</div>
            <Box 
                toggleColor={toggleColor}
                color = {color}  
                number = {number}
                toLog = {(text) => console.log(text)}
            />
    </div>    
)
}







export default TextBox; 

