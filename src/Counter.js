import React from "react";

export class Counter extends React.Component {
    state = {
        counter: 0,
    }

    constructor(props) {
        super(props)


        setInterval(() => {
            this.setState((state) => {
            return {counter: state.counter + 1}
            })
        }, 1000);
    }



  render() {
    return (<div>
      <h1>Count: {this.state.counter}</h1>
    </div>
    )
  }
}