import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "ð": "Smiling",
  "ðģ": "disbelief",
  "ð": "sad",
  "ðĨĄ": "takeout box",
  "âĪïļ": "love",
  "ð": "annoyance",
  "ð": "grinning face",
  "ð": "slightly smiling face",
  "ð": "Winking Face",
  "ð": "Kissing Face with Closed Eyes",
  "ðĪ": "Money Mouth face",
  "ðĪŠ": "zany face"
};

var emojiWeHave = Object.keys(emojiDictionary);

export default function App() {
  var [emojiInput, setEmojiInput] = useState("");

  function onEmojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    // if (meaning === undefined) {
    //   meaning = "We dont have this in our database";
    // }
    if (userInput in emojiDictionary) {
      setEmojiInput(meaning);
    } else {
      meaning = "We dont have this in database";
      setEmojiInput(meaning);
    }
  }

  function onEmojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    return setEmojiInput(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={onEmojiHandler}></input>
      <h2>{emojiInput}</h2>
      <h3>Emojis we have</h3>
      <h2>
        {emojiWeHave.map(function (emoji) {
          return (
            <span
              onClick={() => onEmojiClickHandler(emoji)}
              style={{
                fontSize: "1.5rem",
                padding: "0.26rem",
                cursor: "pointer"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </h2>
    </div>
  );
}

/** View - Interact - state in event handler
 *
 */
