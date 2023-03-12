import React from 'react';
import { Age } from "./Age";

export function Welcome({name}, {age}) {

    return(
        <div className='welcome'>
            <h1>Hello {name}</h1>
            <Age age={age}/>
        </div>
    ) 
}
