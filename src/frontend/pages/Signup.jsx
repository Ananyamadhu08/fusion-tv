import React from "react";
import { SignupForm } from "../components";

function Signup() {
  return (
    <div className="relative" style={{ bottom: "2rem" }}>
      <SignupForm />
      <div className="spacer-3rem"></div>
    </div>
  );
}

export default Signup;
