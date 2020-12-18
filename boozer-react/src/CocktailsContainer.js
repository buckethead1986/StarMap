import React from "react";
import Cocktail from "./Cocktail";

class CocktailsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      cocktails: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/cocktails")
      .then(res => res.json())
      .then(json =>
        this.setState(
          {
            cocktails: json
          },
          () => console.log(this.state.cocktails)
        )
      );
  };

  render() {
    const Cocktails = this.state.cocktails.map(cocktail => {
      return (
        <li key={cocktail.id}>
          <Cocktail cocktails={cocktail} />
        </li>
      );
    });
    return (
      <div>
        <ul>{Cocktails}</ul>
      </div>
    );
  }
}

export default CocktailsContainer;
