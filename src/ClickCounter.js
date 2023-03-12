import React from "react";

export class ClickCounter extends React.Component {
  state = {
    counter: 0,
  }

  handleAddNumber = () => {
    this.setState((state) => {
      return {counter: this.state.counter + 1}
    })
  }

  render() {
    const counterStyle = {
      color: "#FFFF",
      backgroundColor: this.state.counter < 8 ? "red" : "#adc178",
    }
    return (<div>
      <p>Count: {this.state.counter}</p>
      <button onClick={this.handleAddNumber} style={counterStyle}>Add</button>
    </div>
    )
  }
}