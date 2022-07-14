import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js";

function createBlock(emojiterm) {
  return (
    <Entry
      key={emojiterm.id}
      emoji={emojiterm.emoji}
      name={emojiterm.name}
      meaning={emojiterm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createBlock)}</dl>
    </div>
  );
}

export default App;
