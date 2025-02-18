import { useState } from 'react';

export default function Counter() {
  const initialCountState = 0
  const [count, setCount] = useState(initialCountState);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
