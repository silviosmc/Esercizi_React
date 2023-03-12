import React from "react";
import { CounterDisplay } from "./CounterDisplay";

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
      <CounterDisplay count={this.state.counter}/>
    </div>
    )
  }
}