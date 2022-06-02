import React from 'react';
import { useState } from 'react' 

const gifs = ['100k','200k','10k','chuc ban may man lan sau'];




function Give() {
    const [ gif, setGif ] = useState('');
    const handleGive = () => {
        let random = Math.floor(Math.random() * 100);
        console.log(random);
        if( random <= 5 ){
            let randomGive = Math.floor(Math.random() * gifs.length);
            setGif(gifs[randomGive]);
        }else{
            setGif(gifs[3]);
        }
    }
    return(
        <React.StrictMode>
            <h1>{gif || 'nhan nut de nha qua'}</h1>
            <button onClick = {handleGive}> lay qua</button>
        </React.StrictMode>
    )
}

export default Give