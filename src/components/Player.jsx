import { useRef, useState } from "react";
export default function Player({ name, setName }) {
  const [visible, setVisible] = useState(false);
  const playerName = useRef();
  function handleClick() {
    setName(playerName.current.value);
    playerName.current.value = "";
    setVisible(true);
  }
  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input disabled={visible} autoFocus ref={playerName} type="text" />
        <button disabled={visible} onClick={handleClick}>
          Set Name
        </button>
      </p>
    </section>
  );
}
