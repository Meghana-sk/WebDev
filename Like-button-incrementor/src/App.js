import React, { useState } from "react";
import "./styles.css";

var helloText = "Welcome";
var color = "darkgray";

// var username= prompt("enter username");
var username = "Meghana";
var welcomeMsg = "Welcome " + username;
// var likeCounter = 0;

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  function onClickHandler() {
    var newLikeCounter = likeCounter + 1;
    // console.log("clicked");
    setLikeCounter(newLikeCounter);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{welcomeMsg}</h1>
      <button onClick={onClickHandler}>Like me!</button>
      {likeCounter}
    </div>
  );
}

/** Things to notice
 * class => className
 * background-color => backgroundColor
 *
 */
