import {useState} from 'react';
export default function Counter(){
    const [count,setCount]=useState(0);
    const [value,setValue]=useState("");
    return (<>
    <input type="text" value={value} 
    onChange={event=>setValue(event.target.value)}/>
    <p>You typed {value.length} chars</p>
    <button onClick={()=>setCount(count-1)}>-</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    <button onClick={()=>setCount(count+1)}>+</button>
    <p>You clicked {count} times</p>
    </>);
}