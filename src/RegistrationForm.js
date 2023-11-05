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
      // Handle successful registration and redirection to login
      history.push("/login");
    } catch (error) {
      // Handle registration error
      console.error("Registration failed", error);
    }
  };

  return (
    // Registration form JSX with input fields and submit button
    x
  );
}

export default RegistrationForm;
