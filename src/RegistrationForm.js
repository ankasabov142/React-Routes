import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { registerUser } from "./api";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await registerUser(username, email, password);
      history.push("/login");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
