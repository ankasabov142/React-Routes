import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "./api";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      // Handle successful login and redirection
      history.push("/dashboard");
    } catch (error) {
      // Handle login error
      console.error("Login failed", error);
    }
  };

  return (
    // Login form JSX with input fields and submit button
  );
}

export default LoginForm;
