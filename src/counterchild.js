// CounterDisplay.js
import React from 'react';
import { useCounter } from './counter';

const CounterDisplay = () => {
  const { count } = useCounter();

  return <div>Count: {count}</div>;
};

export default CounterDisplay;
