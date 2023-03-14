import React from 'react';
import { Container } from './Container';
import { Route, Routes, useNavigate } from "react-router-dom";
import { Welcome } from './Welcome';
import { Counter } from './Counter';
import { ShowGithubUser } from './ShowGithubUser';


// Ho utilizzato i button con useNavigate perchè i link per qualche motivo non li renderizzava

export function App() {

    const navigate = useNavigate()
    
    function handleHomeButton() {
        navigate("/")
    }
    function handleCounterButton() {
        navigate("/counter")
    }
    function handleUsersButton() {
        navigate("/users")
    }

    return(
        <Container title="React Router 04">

            <Routes>
                <Route path="/" element={<Welcome name="Silvio" age={33} />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/users/:username" element={<ShowGithubUser />} />
            </Routes>
            <button onClick={handleHomeButton}>Home</button>
            <button onClick={handleCounterButton}>Counter</button>
            <button onClick={handleUsersButton}>Users</button>

        </Container>
        
    )

}