import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={() => setCount((num) => num + 1)}>Increment</button>

      <button onClick={() => setCount((num) => num - 1)}>Decrement</button>
      <button onClick={() => setCount((num) => Math.pow(num, 2))}>
        Num sqr
      </button>
      <button onClick={() => setCount((num) => num * 0)}>Start Over</button>
    </div>
  );
}
