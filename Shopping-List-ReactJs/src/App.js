import React from "react";
import "./styles.css";

var shoppingList = [
  "Chocolate",
  "milk",
  "oranges",
  "flowers",
  "shirts",
  "bread"
];

export default function App() {
  function getBg(index) {
    if (index % 2 === 0) {
      return "darkGray";
    }
    return "lightBlue";
  }

  function listItemClickHandler(item) {
    console.log(item);
  }

  return (
    <div className="App">
      <h1>Shopping list</h1>
      <ul style={{ listStyleType: "none" }}>
        {/* <li>{shoppingList[0]}</li>
        <li>{shoppingList[1]}</li>
        <li>{shoppingList[2]}</li>
        <li>{shoppingList[3]}</li>
        <li>{shoppingList[4]}</li>
        <li>{shoppingList[5]}</li> */}
        {shoppingList.map((item, index) => {
          return (
            <li
              key={item}
              onClick={() => listItemClickHandler(item)}
              style={{ backgroundColor: getBg(index), padding: "1rem" }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** View - Interact - state in event handler
 *
 */
