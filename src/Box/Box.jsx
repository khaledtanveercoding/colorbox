import React, { useState } from "react";
import "./Box.css";

// box component rec

function Box({ color }) {
  const [lock, setLock] = useState(false);
  const [localcolor, setLocalcolor] = useState("");
  const [newbox, setNewBox] = useState([]);

  return (
    <div>
      {/* <div className="boxtext">
        The Color in this Box is
        {localcolor === "" ? { color } : { localcolor }}
      </div> */}
      <div
        className="box"
        style={
          localcolor === "" ? { background: color } : { background: localcolor }
        }
      >
        The {localcolor} Box
      </div>
      <button
        className="button"
        onClick={() => {
          setLock(true);
          setLocalcolor(color);
        }}
      >
        lock me
      </button>
      <button
        className="button"
        onClick={() => {
          setLock(false);
          setLocalcolor("");
        }}
      >
        unlock me
      </button>
    </div>
  );
}

export default Box;
