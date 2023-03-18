import React, {useState} from "react";

const Home = () => {
  const [color, setColor] = useState("")
  return (
    <div>
      <div id="stick"/>
        <div id="traffic">
          <div onClick={()=>setColor("red")} className={"light red" + (color==="red"? " glow" : "")}></div>
          <div onClick={()=>setColor("yellow")} className={"light yellow" + (color==="yellow"? " glow" : "")}></div>
          <div onClick={()=>setColor("green")} className={"light green" + (color==="green"? " glow" : "")}></div>
        </div>
      </div>
  );
};

export default Home;
