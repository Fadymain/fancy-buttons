import { useState } from "react";

function LightSwitchButton({light, switchLight}){
  // console.log("props", props);
  // const [light, setLight] = props;
  

  const handleClick = () => switchLight();
  
  return (
    <button onClick={handleClick} className="LightSwitchButton">
      {light === "on" && <span className="on"><i>💡</i> I'm on!</span>}
      {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;