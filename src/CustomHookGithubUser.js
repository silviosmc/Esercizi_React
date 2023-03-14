import React from "react";
import { useState } from "react";
import { useGitHubUser } from "./useGithubUser";

export function CustomHookGithubUser() {
    const {data, error, loading, onFetchUser} = useGitHubUser()
    const [user, setUser] = useState("")

    function handleGetUser() {
        onFetchUser(user)
    }

    return(
        <div>
            <input value={user} onChange={(e) => setUser(e.target.value)} placeholder="username"></input>
            <button onClick={handleGetUser}>Load User Data</button>
            {loading && <h3>Loading...</h3>}
            {error && <h3>There was an error!</h3>}
            {data && <h4>User: {data.name}</h4>}
            {data && <h4>username: {data.login}</h4>}
        </div>
    )
}