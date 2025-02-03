import { useState } from "react";

export default function Brecherche(props) {
  const [text, setText] = useState("");
  return (
    <>
      <input
        placeholder="Taper un text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          props.onAddTodo(text);
          setText("");
        }}
      >
        Ajouter
      </button>
    </>
  );
}
