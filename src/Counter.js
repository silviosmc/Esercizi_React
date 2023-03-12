import React from "react";

export class Counter extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            counter: props.initialValue,
        }

        setInterval(() => {
            this.setState((state) => {
            return {counter: state.counter + props.incrementValue}
            })
        }, props.initialInterval);
    }



  render() {
    return (<div>
      <h1>Count: {this.state.counter}</h1>
    </div>
    )
  }
}