import React, { useState } from 'react';
const Counter = ({ onIncrement, onDecrement }) => {
  return (
    <div>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};export default Counter