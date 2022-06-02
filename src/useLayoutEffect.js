import React from 'react';
import {useState, useLayoutEffect} from 'react';

//useEffect 
// 1.cập nhập lại state 
// 2.câp nhập lạ dom (mutates)
// 3. render lại ui
// 4. gọi cleanup neu deps thay doi
// 5. gọi lại useEffect callback
//useLayoutEffect
// 1.cập nhập lại state
// 2.câp nhập lại dom
// 3.gọi cleanup neu deps thay doi (sync)
// 4. gọi lại useLayoutEffect callback(sync)
// 5.render lại ui 
export default function Message(){
    let [number,setNumber] = useState(0)

    useLayoutEffect(() => {
        if(number > 3){
            setNumber(0);
        }
    },[number])
    let handlePlus = () => {
        setNumber(number +1)
    }
    return(
        <React.Fragment>
            <h1>{number}</h1>
            <button onClick={handlePlus}>run</button>
        </React.Fragment>
    )
}