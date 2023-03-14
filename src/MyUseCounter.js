import { useCallback, useState } from 'react';

export function CustomHookCounter(initialValue = 0) {
    const [valore, setValore] = useState(initialValue)

    const Increment = useCallback(() => {
        setValore((valore) => valore + 1)
    }, [])
    
    const Decrement = useCallback(() => {
        setValore((valore) => valore -1)
    }, [])

    const Reset = useCallback(() => {
        setValore(initialValue)
    }, [])



    return {Increment, Decrement, Reset, valore};
}