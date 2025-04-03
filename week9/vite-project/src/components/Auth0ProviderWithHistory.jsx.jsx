import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

export const Auth0ProviderWithHistory = ({ children }) => {
  console.log(import.meta.env)

  return (
    <Auth0Provider domain={import.meta.env.VITE_AUTH0_DOMAIN} clienId={import.meta.env.VITE_AUTH0_CLIENT_ID}>
     {children}
    </Auth0Provider>
  );
}