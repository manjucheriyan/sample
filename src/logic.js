
import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a context
const CounterContext = createContext();

// Step 2: Create a provider component
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

// Step 3: Create child components consuming the context
const CounterDisplay = () => {
  const { count } = useContext(CounterContext);

  return <div>Count: {count}</div>;
};

const CounterControls = () => {
  const { increment, decrement } = useContext(CounterContext);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// Step 4: Wrap the root component with the provider
const Logic = () => {
  return (<>
    <CounterProvider>
      <div>
        <h1>Counter App</h1>
        <CounterDisplay />
        <CounterControls />
      </div>
    </CounterProvider></>
  );
};

export default Logic;
