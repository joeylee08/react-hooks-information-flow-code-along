import React from "react";
// import { getRandomColor } from "./randomColorGenerator";

function Child({ setNewColors, childColor}) {
  return <div onClick={setNewColors} className="child" style={{ backgroundColor: childColor }} />;
}

export default Child;
