import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
    state = {
        counter: this.props.initialValue,
    }

    componentDidMount() {
        setInterval(() => {
            this.setState(() => ({
                counter: this.state.counter + this.props.incrementValue
            }));
        }, this.props.initialInterval)
    }

    render() {
        return (
            <div>
                <CounterDisplay count={this.state.counter}/>
            </div>
        )
    }
}
