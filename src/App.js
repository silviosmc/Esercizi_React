import React from 'react';
import { Container } from './Container';
import { Route, Routes } from "react-router-dom";
import { Welcome } from './Welcome';



export function App() {

    return(
        <Container title="React Router 01">

            <Routes>
                <Route path="/" element={<Welcome name="Silvio" age={33} />} />
            </Routes>

        </Container>
    )

}