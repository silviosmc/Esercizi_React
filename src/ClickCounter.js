import React, { useState, useEffect } from 'react';


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