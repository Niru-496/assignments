import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { Navbar } from "./components/navbar/Navbar";
import { Display } from "./components/display/Display";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Display />
    </div>
  );
}

export default App;
