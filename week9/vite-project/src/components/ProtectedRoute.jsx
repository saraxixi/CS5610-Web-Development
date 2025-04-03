import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

export default function ProtectedRoute({ Component }) {
  const MyProtectedComponent = withAuthenticationRequired(Component);

  return <MyProtectedComponent />;
}
