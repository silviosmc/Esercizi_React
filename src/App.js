import React from 'react';
import { Container } from './Container';
import { Route, Routes } from "react-router-dom";
import { Welcome } from './Welcome';
import { Counter } from './Counter';
import { ShowGithubUser } from './ShowGithubUser';


export function App() {

    return(
        <Container title="React Router 03">

            <Routes>
                <Route path="/" element={<Welcome name="Silvio" age={33} />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="users/:username" element={<ShowGithubUser />} />
            </Routes>

        </Container>
    )

}