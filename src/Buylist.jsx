import {useState} from 'react';
function Item({ name }){
    const [buy,setBuy]=useState(false);
    if(buy) 
        return (<li onClick={()=>{setBuy(!buy)}}><s>{name}</s>✅</li>);
    return (<li onClick={()=>{setBuy(!buy)}}>{name}</li>);
}
export default function Buylist(){
    const [value,setValue]=useState("");
    const ingred =["Banana","Milk","Egg","Onion","Bread"];
    const filterlist = ingred.filter(it=>it.toLowerCase().includes(value.toLowerCase()));
    const itemlist=filterlist.map(it=><Item name={it}/>)
    return (<><h4>Buying list</h4>
        Keyword : <input type= "text" value={value} 
        onChange={e=>setValue(e.target.value)} />
    <ol>{itemlist}</ol></>);
}