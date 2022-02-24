import React from "react";
import "./Toggle.css";
import { useState } from "react";

export default function Toggle() {
  const [on, setOn] = useState(false);

  return (
    <div
      className={`toggle-cont ${on ? "active" : ""}`}
      onClick={() => setOn(!on)}
    >
      <div className={`spinner ${on ? "active" : ""}`}></div>
    </div>
  );
}
