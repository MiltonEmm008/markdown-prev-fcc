import React from "react";
import EditorsContainer from "./components/editors-container/EditorsContainer";
import Header from "./components/header/Header";
import "./scss/App.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <div></div>
      <EditorsContainer />
    </div>
  );
}

export default App;
