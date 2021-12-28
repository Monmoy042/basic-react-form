import React, { useState } from "react";
import "./App.css";

const SubmitData = () => {
  // different types of states
  const [firstName, setFirstName] = useState();
  const [submitFirstName, submitSetFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [submitLastName, submitSetLastName] = useState();

  // input value store
  const inputValue1 = (event) => {
    let firstNameValue = event.target.value;
    let lastNameValue = event.target.value;
    setFirstName(firstNameValue);
    setLastName(lastNameValue);
  };
  const inputValue2 = (event) => {
    let lastNameValue = event.target.value;
    setLastName(lastNameValue);
  };

  //submit form with input values
  const onSubmit = (event) => {
    event.preventDefault();
    submitSetFirstName(firstName);
    submitSetLastName(lastName);
  };
  return (
    <>
      <div className="main-area">
        <form onSubmit={onSubmit}>
          <div className="form-content">
            <h1>
              Hello {submitFirstName} {submitLastName}
            </h1>
            <input
              type="text"
              placeholder="Enter your first name"
              onChange={inputValue1}
            ></input>
            <br />
            <input
              type="text"
              placeholder="Enter your second name"
              onChange={inputValue2}
            ></input>
            <br />
            <input type="text" placeholder="Enter your Email"></input>
            <br />
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default SubmitData;
