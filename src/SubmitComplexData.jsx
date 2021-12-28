import React, { useState } from "react";
import "./App.css";

const SubmitComplexData = () => {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
    number: "",
  });

  // Input Values
  const inputValues = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    // console.log(event.target.placeholder);

    // const value = event.target.value;
    // const name = event.target.name;

    const { value, name } = event.target;
    setFullName((previousValue) => {
      console.log(previousValue);
      if (name === "fName") {
        return {
          fName: value,
          lName: previousValue.lName,
          email: previousValue.email,
          number: previousValue.number,
        };
      } else if (name === "lName") {
        return {
          fName: previousValue.fName,
          lName: value,
          email: previousValue.email,
          number: previousValue.number,
        };
      } else if (name === "email") {
        return {
          fName: previousValue.fName,
          lName: previousValue.lName,
          email: value,
          number: previousValue.number,
        };
      } else if (name === "number") {
        return {
          fName: previousValue.fName,
          lName: previousValue.lName,
          email: previousValue.email,
          number: value,
        };
      }
    });
  };

  // Submit Operation
  const onSubmit = (event) => {
    event.preventDefault();
    alert("Your form has been submitted....!");
  };
  return (
    <>
      <div className="main-area">
        <form onSubmit={onSubmit}>
          <div className="form-content">
            <div>
              <span>
                Hello {fullName.fName} {fullName.lName}
              </span>
              <br />
              Email: {fullName.email} <br />
              Phone: {fullName.number}
            </div>
            <input
              type="text"
              placeholder="Enter your first name"
              onChange={inputValues}
              name="fName"
              autoComplete="off"
            ></input>
            <br />
            <input
              type="text"
              placeholder="Enter your last name"
              onChange={inputValues}
              name="lName"
              autoComplete="off"
            ></input>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              onChange={inputValues}
              name="email"
              autoComplete="off"
            ></input>
            <br />
            <input
              type="number"
              placeholder="Enter your number"
              onChange={inputValues}
              name="number"
              autoComplete="off"
            ></input>
            <br />
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default SubmitComplexData;
