import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import UserDashboard from "./UserDashboard";
import CarList from "./CarList";
import CarDetails from "./CarDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/dashboard" component={UserDashboard} />
        <Route path="/cars" component={CarList} />
        <Route path="/car/:id" component={CarDetails} />
      </Switch>
    </Router>
  );
}

export default App;
