import React from "react";

const sum = (a,b) => a + b;

class App extends React.Component {
  
  render() {
    return (
      <div>
        <h1>The sum of 2 and 3 is:</h1>
        <h2>{sum(2,3)}</h2>
      </div>
    )
  }
}

export default App