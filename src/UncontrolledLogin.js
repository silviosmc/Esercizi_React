import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {

    usernameRef = createRef()

    componentDidMount() {
        this.usernameRef.current.focus()
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log({
            username,
            password,
            remember
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="username" ref={this.usernameRef}/>
                    <input name="password" type="password" />
                    <input name="remember" type="checkbox" />
                    <br/>
                    <br/>
                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }

}