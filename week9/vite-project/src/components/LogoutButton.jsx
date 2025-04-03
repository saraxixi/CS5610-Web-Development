import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function LogoutButton() {
  useAuth0();

  return <button>Logout</button>
}