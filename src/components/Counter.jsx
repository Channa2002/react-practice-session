import React, { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)
    const [factor, setFactor] = useState(1)
    function incrementCount() {
      setCount(count + factor);
    }
    function decrementCount() {
      setCount(count - factor);
    }
    function incrementFactor() {
      setFactor(factor + 1);
    }
    function decrementFactor() {
      setFactor(factor - 1);
    }
  return (
    <>
    <h1>hi this is the counter {count}</h1>
    <button onClick={incrementCount}>increment</button>
    <button onClick={decrementCount}>decrement</button>
    <h1>set my factor {factor}</h1>
    <button onClick={incrementFactor}>increment</button>
    <button onClick={decrementFactor}>decrement</button>
    </>
  )
}
