import React from "react";

export class ClickTracker extends React.Component {
  state = {
    value: null 
  }

    handleClickButton = (event) => {
        const Clicked = event.target.value

        this.setState({
            value: Clicked
        })
  }

  render() {
    return (<div>
      <h1>Button Clicked: {this.state.value}</h1>
      <button value="Button 1" onClick={this.handleClickButton}>Button 1</button>
      <button value="Button 2" onClick={this.handleClickButton}>Button 2</button>
      <button value="Button 3" onClick={this.handleClickButton}>Button 3</button>
    </div>
    )
  }
}