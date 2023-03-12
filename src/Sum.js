import React from 'react';

export function Sum({ numbers = [0] }) {
  const sum = numbers.reduce((val1, val2) => val1 + val2);

  return (
    <h1>
      Sum: {sum}
    </h1>
  );
}