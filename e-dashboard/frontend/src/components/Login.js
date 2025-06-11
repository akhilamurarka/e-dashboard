import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    } else {
    }
  }, []);
  const handleLogin = async () => {
    console.warn(email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else {
      alert("Please enter correct details");
    }
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
