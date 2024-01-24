import { useState } from "react";
import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    //BEM naming convention
    <div className="App">
      {/* Header */}
      <Header />

      {/* App Body */}
      <div className="app_body">
        <Sidebar />
        <Feed />
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
