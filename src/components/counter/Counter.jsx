import { useState } from "react";
import "./Counter.css";
import CounterButton from "./CounterButton";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementParent(by) {
    setCount(count + by);
  }
  function decrementParent(by) {
    setCount(count - by);
  }

  function resetCounter() {
    setCount(0);
  }

  return (
    <>
      <span className="totalCount">{count}</span>
      <CounterButton
        by={1}
        incrementMethod={incrementParent}
        decrementMethod={decrementParent}
      />
      <CounterButton
        by={2}
        incrementMethod={incrementParent}
        decrementMethod={decrementParent}
      />
      <CounterButton
        by={5}
        incrementMethod={incrementParent}
        decrementMethod={decrementParent}
      />
      <button className="resetButton" onClick={resetCounter}>
        Reset
      </button>
    </>
  );
}
