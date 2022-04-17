import React from "react";
import { LoginForm } from "../components";

function Login() {
  return (
    <div className="relative" style={{ bottom: "2rem" }}>
      <LoginForm />
      <div className="spacer-3rem"></div>
    </div>
  );
}

export default Login;
