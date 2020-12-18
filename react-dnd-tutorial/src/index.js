import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Board from "./components/Board";
import Square from "./components/Square";
import Knight from "./components/Knight";
import { observe } from "./components/Game";
import registerServiceWorker from "./registerServiceWorker";

const rootEl = document.getElementById("root");

observe((knightPosition, bishopPosition) =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} bishopPosition={bishopPosition} />,
    rootEl
  )
);

// ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
