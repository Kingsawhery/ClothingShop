import React, { useState } from "react";

function Example() {
  const [color, setColor] = useState();
  function handleClick(e) {
    if (parseInt(e.target.value) > 10) {
      setColor("green");
    }
    if (parseInt(e.target.value) > 100) {
      setColor("red");
    }
    if (parseInt(e.target.value) > 1000) {
      setColor("purple");
    }
    if (parseInt(e.target.value) > 10000) {
      setColor("yellow");
    }
    console.log(typeof e.target.value);
  }
  return (
    <>
      <input type="text" onChange={handleClick} style={{ background: color }} />
    </>
  );
}
export default Example;
