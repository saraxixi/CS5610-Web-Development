import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router";

export const Auth0ProviderWithHistory = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{ redirect_uri: window.location.origin }}
      onRedirectCallback={(appState) => {
        navigate((appState && appState.returnTo) || window.location.pathname);
      }}
    >
      {children}
    </Auth0Provider>
  );
};
