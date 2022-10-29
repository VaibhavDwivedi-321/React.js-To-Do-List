import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState();
  const [item, setItem] = useState([]);

  function handleChange(event) {
    const input = event.target.value;
    setInputText(input);
  }

  function handleClick() {
    setItem((previousItem) => {
      return [...previousItem, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
