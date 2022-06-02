import React from 'react';
// import { useState } from 'react'
// import Contents from './Contents'
import Give from './Give'
import Contents from './Contents'
import Message from './useLayoutEffect';
import Test from './useRef';
import TestMemo from './useMemo';
import TestReducer from './useReducer';
// const gifs = [
//   '50k',
//   '100k',
//   '1k',
//   '-50k',
// ]

// const coures = [
//   {
//     id : 1,
//     name : 'Html, Css'
//   },
//   {
//     id : 2,
//     name : 'Javascrip',
//   },
//   {
//     id : 3,
//     name : 'ReactJs'
//   }
// ]

function App() {

  // const [gif,setGifs] = useState('chua co qua');

  
  // const givegifs = () => {
  //   const randomNumber = Math.floor(Math.random() * gifs.length);
  //   setGifs(gifs[randomNumber]);
  // }
  
  // const [info,setInfo] = useState({
  //   name: 'ba',
  //   age : '20',
  //   address : 'hai duong'
  // })
  
  // const userUpdate = () => {
  //   setInfo({
  //     ...info,
  //     bio : 'yeu a hoi'
  //   })
  // }
  // const givegif = () => {
  //   setGifs(gifs[3]);
  // }
  // return (
  //   <div className="App">
  //    /*<h1>{JSON.stringify(info)}</h1>
  //    <button onClick = {userUpdate}>update</button>
  //   </div>
  // );
  // return (
  //   <div className="App">
  //     <h1>{gif}</h1>
  //     <button onClick={givegif}>lay qua</button>
  //     <button onClick={givegifs} style={{opacity: 0}}>layqua</button>
  //   </div>
  // )
  // two - way binding 
  // const [check, setCheck] = useState([]);

  // const handleSubmit = () =>{
  //   console.log({id : check});
  // }
  // const handlecheck = (id) =>{
  //   setCheck(prev => {
  //     const isCheck = check.includes(id);
  //     if(isCheck){
  //       return check.filter(item => item !== id);
  //     }
  //     else{
  //       return [...prev,id];
  //     }
  //   });
  // }
  // return(
  //   <div className="App">
  //     {coures.map(coure => (
  //       <div key = {coure.id}>
  //         <input 
  //           type='checkbox'
  //           checked = {check.includes(coure.id)}
  //           onChange={() => handlecheck(coure.id)}
  //         />
  //         {coure.name}
  //       </div>
  //     ))}
  //     <button onClick={handleSubmit}>Resset</button>
  //   </div>
  // )
  // todoList useState
  // const [job,setJob] = useState('');
  // const [jobs,setJobs] = useState(() => {
  //   const storageJson = JSON.parse(localStorage.getItem('job'));

  //   return storageJson ?? [] ;
  // });

  // const handleSubmit = () => {
  //   setJobs(prev => {
  //     const newJob = [...prev,job];

  //     // save code len local storage
  //     const jsonJob = JSON.stringify(newJob);
  //     localStorage.setItem('job', jsonJob);

  //     return newJob;
  //   });
  //   setJob('');
  // };
  // return (
  //   <div>
  //     <input value={job} onChange = {e => setJob(e.target.value)} />
  //     <button onClick={handleSubmit} >Add</button>

  //     <ul>
  //       {jobs.map((job,index) =>(
  //         <li key = {index} >{job}</li>
  //       ))}
  //     </ul>
  //   </div>
  // )
  // Mounted / Unmounted
  // hooks useEffects 
  // const [show,setShow] = useState(false);
  // return(
  //   <React.StrictMode>
  //     <button onClick={() => setShow(!show)}>togole</button>
  //     { show && (<Contents/>)}
  //   </React.StrictMode>
  // )
  return (
    <React.StrictMode>
      <Give/>
      <Contents/>
      <Message />
      <Test />
      <TestMemo />
      <TestReducer />
    </React.StrictMode>
  )
}

export default App;
