import React, { useState } from "react";
import "./Box.css";

// box component rec

function Box({ color }) {
  const [lock, setLock] = useState(false);
  const [localcolor, setLocalcolor] = useState("");

  return (
    <div>
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
      >
        unlock me
      </button>
    </div>
  );
}

export default Box;
