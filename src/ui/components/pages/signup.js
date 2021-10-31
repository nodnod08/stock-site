import React, { useEffect } from "react";

import SignupForm from "../partials/SignupForm";
function SignUp() {
  return (
    <div className="custom-container">
      <div className="max-w-md mx-auto rounded shadow-lg bg-gray-50 p-2 mt-16">
        <SignupForm />
      </div>
    </div>
  );
}

export default SignUp;
