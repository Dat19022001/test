import React from 'react';
import { useState,useMemo,useRef } from 'react';
// giong useEffect chir thuc hien mot lan tranh thuc hien lai mot cach ko can thiet
export default function TestMemo(){

    let [name,setName] = useState('');
    let [ price, setPrice] = useState('')
    let [product,setProduct] = useState([])

    let nameRef = useRef();
    let handleAdd = () => {
        setProduct([...product,{
            name,
            price:+price,
        }])

        setPrice('');
        setName('');
        nameRef.current.focus();
    }

    let total =useMemo(() =>{
       return  product.reduce((result,pro) => result + pro.price,0)
    },[product])
    return(
        <React.StrictMode>
            <input
                ref={nameRef}
                value={name}
                placeholder = "name..." 
                onChange = {e => setName(e.target.value)}
             />
             <input
                value={price}
                placeholder = "price..."
                onChange = {e => setPrice(e.target.value)}
              />
            <button onClick ={handleAdd}>Add</button>
            <br />
            <p>total:{total}</p>
            <ul>
                {product.map((item,index) => (
                    <li key={index}>{item.name} - {item.price}</li>
                ))}
            </ul>
        </React.StrictMode>
    )
}