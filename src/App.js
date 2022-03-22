import './App.css';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';
import { useState } from "react";

function App() {
  const switchLight = () => setLight(light === "on" ? "off" : "on");
  const [light, setLight] = useState("off");
  const dark = (light === 'off') ? 'dark' : '';


  return (
    <div className={`App ${dark}`}>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton light={light} switchLight={switchLight}/>
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
