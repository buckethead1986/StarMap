import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";
import Square from "./components/Square";
import Knight from "./components/Knight";
import { observe } from "./components/Game";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board knightPosition={[3, 4]} />
      </div>
    );
  }
}

export default App;
