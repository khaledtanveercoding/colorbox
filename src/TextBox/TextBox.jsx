import React from 'react'
import { useState, createContext } from 'react'
import "./TextBox.css"
import Box from "../Box/Box"

export const ToggleContext = createContext(true);

function TextBox() {
    const [color, setColor] = useState(true)
    const [boxText, setBoxText] = useState(true);
    const toggleColor = async () => {
        await setColor(color ? false : true);
        await setBoxText(boxText ? "pink" : "green")
    }

    return (
        <div className="center">
            <div className="boxtext">The Color is {boxText} and {boxText}</div>
            <button className="button" onClick={() => toggleColor()}>toggle</button>
            <ToggleContext.Provider value={color}>
                <Box
                    toggleColor="pink"
                    color="green"
                />
                <Box
                    toggleColor="green"
                    color="pink"
                />
            </ToggleContext.Provider>
        </div>
    )
}







export default TextBox;

