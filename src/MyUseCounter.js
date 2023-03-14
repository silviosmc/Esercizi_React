import { useState } from 'react';

export function CustomHookCounter(initialValue = 0) {
    const [valore, setValore] = useState(initialValue)

    const Increment = () => {
        setValore((valore) => valore + 1)
    }

    const Decrement = () => {
        setValore((valore) => valore -1)
    }

    const Reset = () => {
        setValore(initialValue)
    }

    return {Increment, Decrement, Reset, valore};
}