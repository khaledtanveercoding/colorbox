import React from "react";
import { useState } from "react";
import "./TextBox.css";
import Box from "../Box/Box";

// export const ToggleContext = createContext(true);

function TextBox() {
  const [color, setColor] = useState("pink");
  const toggleColor = () => {
    setColor(color === "pink" ? "green" : "pink");
  };

  return (
    <div className="center">
      <div className="boxtext">
        The Color in Box 1 {color === "pink" ? "green" : "pink"} and in Box 2{" "}
        {color}
      </div>
      <button className="button" onClick={toggleColor}>
        toggle
      </button>
      <div className="boxwrapper">
        <Box color={color === "pink" ? "green" : "pink"} />
        <Box color={color} />
      </div>
    </div>
  );
}

//propdrilling  for multiple layers usestate

//array , map over that to generate box components

export default TextBox;
