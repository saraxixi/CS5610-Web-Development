import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  function loginHandler() {
    loginWithRedirect();
  }

  return (
    <button onClick={loginHandler}>
      Login
    </button>
  )
}