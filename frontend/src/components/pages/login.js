import React from "react";

import LoginForm from "../partials/LoginForm";
function Login() {
  return (
    <div className="custom-container">
      <div className="max-w-md mx-auto rounded shadow-lg bg-gray-50 p-2 mt-16">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
