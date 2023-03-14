import React, { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList() {
  const [usernames, setUsernames] = useState([]);
  const [username, setUsername] = useState("");

  function handleAddUsername() {
    setUsernames([...usernames, username]);
    setUsername("");
  }

  function handleInputChange(event) {
    setUsername(event.target.value);
  }

  return (
    <div>
        
      <div>
        <input type="text" placeholder="Enter username" value={username} onChange={handleInputChange} />
        <button onClick={handleAddUsername}>Add</button>
      </div>

      {usernames.map((username) => (
        <GithubUser key={username} username={username} />
      ))}

      <br/>

    </div>
  );
}

