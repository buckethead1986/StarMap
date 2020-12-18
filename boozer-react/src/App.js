import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CocktailsContainer from "./CocktailsContainer";

class App extends Component {
  render() {
    return (
      <div>
        <CocktailsContainer />
      </div>
    );
  }
}

export default App;
