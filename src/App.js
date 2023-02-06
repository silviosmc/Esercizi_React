import React from "react";

const sum = (a,b) => a + b;

class App extends React.Component {
  
  render() {
    return (
      <div>
        <h2>Hello, {sum(2,3)}!</h2>
      </div>
    )
  }
}

export default App