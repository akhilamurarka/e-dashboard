import React, { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const collectData = () => {
    console.warn(name, email, password);
  };

  return (
    <div className="register">
      <h1>SignUp</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter Name"
      ></input>
      <input
        className="inputBox"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Enter Email"
      ></input>
      <input
        className="inputBox"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Enter Password"
      ></input>
      <button onClick={collectData} className="registerButton" type="button">
        Sign Up
      </button>
    </div>
  );
}
