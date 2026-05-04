import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : count);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increment} style={{ margin: '10px', padding: '10px 20px' }}>Increment</button>
      <button onClick={decrement} style={{ margin: '10px', padding: '10px 20px' }}>Decrement</button>
      <button onClick={reset} style={{ margin: '10px', padding: '10px 20px' }}>Reset</button>
    </div>
  );
};

export default Counter;