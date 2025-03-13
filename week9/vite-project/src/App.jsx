import React from "react";
import Header from "../components/Header";

function App() {
  const appName = "My React App";

  return (
    <div>
      <Header appName={appName} />
    </div>
  );
}

export default App;