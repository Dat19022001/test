
import { useEffect, useState } from 'react'
// side effects 

// useEffects(callback(Bat buoc),[deps](ko bat buoc))
// useEffects(callback) -goij callback moi khi cpn re-render it dung goi call sau khi cpn them element vao fdom
// useEffects(callback,[]) - chi goi callback mot lan khi cpn duoc mount
//useEffects(callback.[deps]) - callback van duoc goi moi khi deps thay doi
// const tabs = ['posts','comments','albums'];
function Contents (){
    // f8 block 
    // 1. callback luon duoc goi sau khi cpn mounted
    // clearn funcition luon duoc goi truoc khi Unmounted

    // const [posts,setPost] = useState([]);
    // const [showToTop,setShowToTop] = useState(false);
    // const [types,setTypes] = useState('posts');
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${types}`)
    //     .then(res => res.json())
    //     .then(posts => {
    //         setPost(posts);
    //     })
    // },[types]);
    // useEffect(() => {
    //     const handleScort = () => {
    //         if(window.scrollY >= 200){
    //             setShowToTop(true);
    //         }
    //         else{
    //             setShowToTop(false);
    //         }   
    //     }
    //     window.addEventListener('scroll', handleScort);
    //     console.log('add')

    //     return () => {
    //         console.log('remote')
    //     }
    // }, [])
    
    // return (
    //     <div>
    //         {tabs.map((tab,index) => (
    //             <button key={index} onClick={() => setTypes(tab)}>{tab}</button>
    //         ))}

    //         <ul>
    //             {posts.map(post => 
    //             <li key={post.id}>{post.title || post.name}</li>
    //             )}
    //         </ul>
    //         { showToTop && (
    //             <button style={{position:'fixed', right: '10px',bottom: '10px'}} >go to top</button>
    //         )}
    //     </div>
    // )
    // const [count,setCount] = useState(180);
    // useEffect(() => {
    // //     let timerID = setInterval(() => {
    // //         setCount(prevState => prevState -1)
    // //     }, 1);
    // },[])
    
    // return(
    //     <h1>{count}</h1>
    // )
    const [avatar,setAvatar] = useState()
    useEffect(() => {
        return() => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])
    const handleAvart = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file)
        console.log(file.preview)
        setAvatar(file)
    }
    return (
        <div>
            <input type="file"
            onChange = {handleAvart}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width="80%"  />
            )}
        </div>
    )
}


export default Contents