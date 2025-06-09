import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.warn(email, password);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        className="inputBox"
        type="email"
        value={email}
        placeholder="enter email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <input
        className="inputBox"
        value={password}
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="enter password"
      ></input>

      <button onClick={handleLogin} className="registerButton">
        Login
      </button>
    </div>
  );
}

export default Login;
