import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🐺": "wolf",
  "🦝": "raccoon",
  "🐹": "hamster",
  "🐻": "bear",
  "🦄": "unicorn",
  "🦓": "zebra",
  "🐐": "goat",
  "🐏": "ram",
  "🐑": "ewe",
  "🐪": "camel",
  "🐄": "cow",
  "🐎": "horse"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [emoji, setEmoji] = useState("");
  var [meaning, setMeaning] = useState("");

  function emojiChangeHandler(event) {
    var emojiInput = event.target.value;
    setEmoji(emojiInput); //updating emoji
    if (emojiInput in emojiDictionary) {
      setMeaning(emojiDictionary[emojiInput]);
    } else if (emojiInput === "") {
      setMeaning("Name of Creature Emoticon will display here");
    } else {
      setMeaning("Failed to recognise this sumbol");
    }
  }

  return (
    <div className="App">
      <h1>Creature Symbol Interpreter</h1>
      <input
        onChange={emojiChangeHandler}
        value={emoji}
        placeholder="Enter your creature emoticon here"
      />
      <div class="meaning-div">{meaning}</div>

      <div class="emoji-list">
        {emojisWeKnow.map((emoji) => (
          <span>{emoji}</span>
        ))}
      </div>
    </div>
  );
}
