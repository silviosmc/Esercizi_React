import React, { useState, useEffect } from 'react';

/* Non ho capito la consegna, devo passare onCounterChange 
come prop e poi usarla dentro useEffect prendendo come parametro 
valore, ma cosa deve fare onCounterChange? e dove deve essere inizializzata? */

export function ClickCounter({ onCounterChange }) {
  const [valore, setValore] = useState(0);

  function handleCounter() {
    setValore((valore) => valore + 1);
  }

  useEffect(() => {
   // onCounterChange(valore);
  }, [valore]);

  return (
    <div>
      <h2>Counter: {valore}</h2>
      <button onClick={handleCounter}>Add</button>
    </div>
  );
}