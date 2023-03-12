import React from "react";
import { Welcome } from "./Welcome";


export class InteractiveWelcome extends React.Component {
    state = {
        username: '', 
    }


    handleInputChange = (event) => {
       const name = event.target.name
       const value = event.target.value

       this.setState({
        [name]: value
       })
    }


    render() {
        return (
            <div>
                <Welcome name={this.state.username} age={33}/>
                <input name="username" value={this.state.username} onChange={this.handleInputChange}></input>
            </div>
        )
    }

}