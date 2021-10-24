import React, { useState } from "react";
import useSound from "use-sound";
import "./App.css";
import onion from "./sounds/cutting_a_onion_speedy.mp3";
import dog from "./sounds/dog3a.mp3";
import ice from "./sounds/ice_water.mp3";
import brook from "./sounds/near_a_brook.mp3";
import openingCan from "./sounds/opening_a_can_pouring.mp3";

type ClickState = {
  [key: number]: { isClicked: boolean };
};

const clickStates: ClickState = {
  0: { isClicked: false },
  1: { isClicked: false },
  2: { isClicked: false },
  3: { isClicked: false },
  4: { isClicked: false },
  5: { isClicked: false },
  6: { isClicked: false },
  7: { isClicked: false },
};

const sounds = [ice, onion, openingCan, dog, brook];

function App() {
  const [isClicked, setIsClicked] = useState(clickStates);
  const [sound, setSound] = useState(sounds[0]);
  const [play] = useSound(sound);

  const click = (e: any) => {
    const num = Math.floor(Math.random() * 5) + 0;
    setSound(sounds[num]);
    const target: number = e.currentTarget.dataset["index"];
    const newIsClicked = {
      ...isClicked,
      [target]: { isClicked: !isClicked[target].isClicked },
    };
    setIsClicked(newIsClicked);
    play();
  };

  return (
    <div className='App'>
      <div className='body'>
        <div className='buttons'>
          {Object.values(isClicked).map((clickState, i) => (
            <div className='buttonWrapper'>
              <button
                className={clickState.isClicked ? "fuga" : "hoge"}
                data-index={i}
                onClick={click}
              ></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
