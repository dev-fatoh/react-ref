import { useRef } from "react";
export default function Player({ name, setName }) {
  const playerName = useRef();
  function handleClick() {
    setName(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input autoFocus ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
