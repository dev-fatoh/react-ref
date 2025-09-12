import { useState } from "react";
import Player from "./components/Player.jsx";
import TimerChanllenge from "./components/TimerChanllenge.jsx";

function App() {
  const [name, setName] = useState("");
  return (
    <>
      {/* pass name to player component*/}
      <Player name={name} setName={setName} />
      {/* render TimerChanllenge if player name is exist */}
      {name && (
        <div id="challenges">
          <TimerChanllenge title={"Easy"} targetTime={1} />
          <TimerChanllenge title={"Not easy"} targetTime={5} />
          <TimerChanllenge title={"Getting tough"} targetTime={10} />
          <TimerChanllenge title={"Pros only"} targetTime={15} />
        </div>
      )}
    </>
  );
}

export default App;
