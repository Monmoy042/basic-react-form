import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState();
  const [fullName, setFullName] = useState();
  const inputEvent = (event) => {
    // console.log("Clicked");
    // console.log(event);
    // console.log(event.target.value);
    let inputValue = event.target.value;
    setName(inputValue);
  };

  const onSubmit = () => {
    setFullName(name);
  };
  return (
    <>
      <div className="main-area">
        <div className="form-content">
          <h1>Hello {fullName}</h1>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={inputEvent}
          ></input>
          <br />
          <button onClick={onSubmit}>LogIn</button>
        </div>
      </div>
    </>
  );
};
export default App;
