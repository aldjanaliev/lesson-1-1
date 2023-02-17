import  React, { useState } from 'react'
import './Counter.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <button onClick={decrement}>decr123ement</button>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
        </div>
    )
}
