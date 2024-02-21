import React, { useState } from 'react';
import Counter from './loginchild.js';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  
  const incrementCounter = () => {
  
  
    setCount(prevCount => prevCount + 1);
  };

  const decrementCounter = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <Counter 
        onIncrement={incrementCounter} 
        onDecrement={decrementCounter} 
      />
    </div>
  );
};

export default CounterApp;
