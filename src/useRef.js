import React from 'react';
import { useState, useRef } from 'react'
// lưu các giá trị qua một tham chiếu bên ngoài function component mà ko bị khởi tạo lại
// memo kiểm tra xem function component co thay đoi ko để render lại nêu ko thay đổi thì ko render

// useCallback sẽ dùng để lưu tham chiếu khi so sánh với tham chiêu trước để memo hoạt động
export default function Test(){
    let [count,setCount] = useState(60);

    let timerId = useRef()
    let handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount -1)
        },1000)
    }

    let handleStop = () => {
        clearInterval(timerId.current)
    }

    return(
        <React.StrictMode>
            <div style={{padding:20}}>
                <h1>{count}</h1>
                <button onClick = {handleStart}>Start</button>
                <button onClick = {handleStop}>Stop</button>
            </div>
        </React.StrictMode>
    )
}