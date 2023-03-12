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
    return (<div>
      <p>Count: {this.state.counter}</p>
      <button onClick={this.handleAddNumber}>Add</button>
    </div>
    )
  }
}