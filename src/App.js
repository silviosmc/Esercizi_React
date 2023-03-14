import React from 'react';
import { Container } from './Container';
import { Route, Routes } from "react-router-dom";
import { Welcome } from './Welcome';
import { Counter } from './Counter';


export function App() {

    return(
        <Container title="React Router 02">

            <Routes>
                <Route path="/" element={<Welcome name="Silvio" age={33} />} />
                <Route path="/counter" element={<Counter />} />
            </Routes>

        </Container>
    )

}