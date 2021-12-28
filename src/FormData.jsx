import React, { useState } from "react";
import "./App.css";

const FormData = () => {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
    number: "",
  });

  // Input Values
  const inputValues = (event) => {
    const { value, name } = event.target;
    setFullName((previousValue) => {
      console.log(previousValue);
      return {
        ...previousValue,
        [name]: value,
      };
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
            <div className="input-data">
              <span>
                Hello, {fullName.fName} {fullName.lName}
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
export default FormData;
