import React, { useState } from "react";
import "../loginPages/SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "mail") {
      setEmail(value);
    } else if (name === "number") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in">
      <h5 htmlFor="mail">Don't have an account? Create</h5>
      <br />
      <h1>Login</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="Email"
          name="mail"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="number"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Sign In</button>
        <br />
      </form>
    </div>
  );
};

export default SignIn;
