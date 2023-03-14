import React from "react";
import { useCustomHookLogin } from "./CustomHookLogin";

export function MyCustomHookLogin() {
    const {data, ChangeInput, OnLogin} = useCustomHookLogin()




    return(        
    <form>
        <input onChange={ChangeInput} type="text" name="username" value={data.username} placeholder="username"></input>
        <input onChange={ChangeInput} type="password" name="password" value={data.password} placeholder="password"></input>
        <input onChange={ChangeInput} type="checkbox" name="remember" checked={data.remember}></input>
        <button disabled={data.username === '' || data.password === ''} onClick={OnLogin}>Login</button>
    </form>
    )
}