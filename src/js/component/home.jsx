import React, { useState } from "react";

const Home = () => {
  const [color, setColor] = useState("");
  const [purple, setPurple] = useState(false);

// purple div will show when purple value is true
// delete button will show up when purple value is true
// add button will show up when purple value is false
  return (
    <div>
      <div id="stick" />
      <div id="traffic" style={{ height: 540 }}>
        <div onClick={() => setColor("red")} className={"light red" + (color === "red" ? " glow" : "")}/>
        <div onClick={() => setColor("yellow")} className={"light yellow" + (color === "yellow" ? " glow" : "")}/>
        <div onClick={() => setColor("green")} className={"light green" + (color === "green" ? " glow" : "")}/>
        {purple && <div onClick={() => setColor("purple")} className={"light purple" + (color === "purple" ? " glow" : "")}/>} 
      </div>
      <h4>Make sure to click a light to make it glow!</h4>
      {purple && <button type="button" onClick={() => setPurple(false)}>Click me to erase the purple light!</button>} 
      {!purple && <button type="button" onClick={() => setPurple(true)}>Click me to add a purple light!</button>}    
    </div>
  )
};

export default Home;
