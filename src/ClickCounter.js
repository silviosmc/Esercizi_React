import React from 'react';
import { useState } from 'react';

export function ClickCounter() {
    
    const [valore, setValore] = useState(0)

    function handleCounter() {
        setValore((valore) => valore + 1)
    }
    
    return(
        <div>
            <h2>Counter: {valore}</h2>
            <button onClick={handleCounter}>Add</button>
        </div>
    )
}