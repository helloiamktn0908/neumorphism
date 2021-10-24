import React, { useState } from "react";
import "./App.css";

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

function App() {
  const [isClicked, setIsClicked] = useState(clickStates);

  const click = (e: any) => {
    const target: number = e.currentTarget.dataset["index"];
    const newIsClicked = {
      ...isClicked,
      [target]: { isClicked: !isClicked[target].isClicked },
    };
    setIsClicked(newIsClicked);
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
