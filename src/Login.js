import React from 'react';
import { useState } from 'react';

export function Login() {
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false,
        isDisabled: false
    })

    function handleChangeInput(event) {
        const {type, name, value, checked} = event.target


        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function handleOnLogin() {
        console.log(data)
      }
    

    return(
        <form>
            <input onChange={handleChangeInput} type="text" name="username" value={data.username} placeholder="username"></input>
            <input onChange={handleChangeInput} type="password" name="password" value={data.password} placeholder="password"></input>
            <input onChange={handleChangeInput} type="checkbox" name="remember" checked={data.remember}></input>
            <button disabled={data.username === '' || data.password === ''} onClick={handleOnLogin}>Login</button>
        </form>
    )
}