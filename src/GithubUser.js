import React, { useEffect, useState } from "react"

export function GithubUser({username}) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchGitHubUser(username) {
        setLoading(true)
        setError(null)
    
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()
            setData(json)
        } catch(error) {
            setError(error)
            setData(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchGitHubUser(username)
    }, [username])

    return(
        <div>
            {loading && <h3>Loading...</h3>}
            {error && <h3>There was an error!</h3>}
            {data && <h4>User: {data.name}</h4>}
            {data && <h4>username: {data.login}</h4>}
        </div>
    )
    
}