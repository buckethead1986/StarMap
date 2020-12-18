import React from "react";

class Cocktail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      kenneth: false
    };
  }

  handleClick = () => {
    this.setState(prevState => {
      return { kenneth: !prevState.kenneth };
    });
  };
  render() {
    console.log(this.props);
    return this.state.kenneth ? (
      <div>
        <div className="ui grid">
          <div>
            <div className="four wide column" onClick={this.handleClick}>
              {this.props.cocktails.name}
            </div>
          </div>
          <div className="six wide column">
            <div>Instructions: {this.props.cocktails.instructions}</div>
          </div>
          <div className="six wide column">
            <div>Description: {this.props.cocktails.description}</div>
          </div>
        </div>
      </div>
    ) : (
      <div className="ui grid">
        <div className="four wide column">
          <div onClick={this.handleClick}>{this.props.cocktails.name}</div>
        </div>
      </div>
    );
  }
}

export default Cocktail;
