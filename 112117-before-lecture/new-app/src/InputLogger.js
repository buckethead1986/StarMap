import React, { Component } from "react";

class InputLogger extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    });
  };

  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange} />
        {/*}<input type="text" onChange={this.handleChange} />
        <input onChange={this.handleChange} />
        */}
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default InputLogger;
