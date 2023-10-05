import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setNewChildColor] = useState(randomColor)

  function setParentColor() {
    const newRandomColor = getRandomColor()
    setColor(newRandomColor)
  }

  function setChildColor() {
    const newChildColor = getRandomColor()
    setNewChildColor(newChildColor)
  }

  function setNewColors() {
    setParentColor()
    setChildColor()
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child setNewColors={setNewColors} childColor={childColor}/>
      <Child setNewColors={setNewColors} childColor={childColor}/>
    </div>
  );
}

export default Parent
