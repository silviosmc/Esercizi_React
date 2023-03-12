import React from "react";

export class TodoList extends React.Component {
  state = {
    items: [],
    currentItem: ""
  }

  handleInputChange = event => {
    this.setState({
      currentItem: event.target.value
    })
  }

  handleAddItem = () => {
    const { currentItem, items } = this.state;

    this.setState({
        items: [...items, currentItem],
        currentItem: ""
    })
  }

  handleResetItems = () => {
    this.setState({
        items: []
    })
  }

  render() {
    return (

        <div>
            <div>
                <input
                    type="text"
                    value={this.state.currentItem}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleAddItem}>Add</button>
                <button onClick={this.handleResetItems}>Reset</button>
            </div>

            <ul>
                {this.state.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
      </div>
    )
  }
}
