import React from 'react';
import { useState} from 'react'
// useState
// 1.Init state
// 2.Actions: UP(state +1) Down(state -1)

// useReducer
// 1.Init state
// 2.Actions: UP(state +1) Down(state -1)
// 3. Reducer 
// 4. Dispatch

// Init state

const initState = 0

// Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'
export default function TestReducer(){
    let [count,setCount] = useState(0)
    return(
        <React.StrictMode>
            <p>{count}</p>
            <button onClick ={() => setCount(count + 1)}>UP</button>
            <button onClick ={() => setCount(count - 1)}>DOWN</button>
        </React.StrictMode>
    )
}