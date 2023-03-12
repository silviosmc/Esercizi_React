import React from "react";


export class Login extends React.Component {
    state = {
        username: '', 
        password: '',
        remember: false,
        isDisabled: true
    }
    

    handleInputChange = (event) => {
       const name = event.target.name
       const value = event.target.value

       this.setState({
        [name]: value
       })
    }

    handleCheckboxChange = (event) => {
        const name = event.target.name
        const checked = event.target.checked

        this.setState({
            [name]: checked
        })
    }

    handleOnLogin = () => {
        this.props.onLogin(this.state)
    }

    handleResetState = () => {
        this.setState({
            username: '', 
            password: '',
            remember: false
        })
    }

    render() {
        const isDisabled = this.state.username === '' || this.state.password === '';

        return (
            <div>
                <input name="username" value={this.state.username} onChange={this.handleInputChange}></input>
                <input name="password" value={this.state.password} type="password" onChange={this.handleInputChange}></input>
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleCheckboxChange}></input>
                <button disabled={isDisabled} onClick={this.handleOnLogin}>Login</button>
                <button onClick={this.handleResetState}>Reset</button>
            </div>
        )
    }

}