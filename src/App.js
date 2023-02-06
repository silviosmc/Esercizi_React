import React from "react";

function newName(newname) {
  return newname
}

const name = newName("Silvio");

class App extends React.Component {
  
  render() {
    return (
      <div>
        <h1>Hello, {name}!</h1>
      </div>
    )
  }
}

export default App
