import React from "react";
import Sidebar from "./page/Sidebar";
import Feed from "./page/Feed";
import Widgets from "./page/Widgets";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
