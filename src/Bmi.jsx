import'./Bmi.css'
import {useRef,useState} from 'react';
const BmiText=({bmi})=>{
    if(bmi<18.5) return (<>
    <br/><img src="/under.png" width="300"/>
    <h1>Underweight</h1>
    </>);
    if(bmi>30) return (<>
    <br/><img src="/over.png" width="300"/>
    <h1>Overweight</h1>
    </>);    
    return (<>
    <br/><img src="/normal.png" width="300"/>
     <h1>Normal</h1>
    </>);
}
export default function Bmi(){
    const w_inputRef = useRef(null);
    const h_inputRef = useRef(null);
    const [bmi,setBmi] = useState(0);
    function calBmi(){
        let w = w_inputRef.current.value;
        let h = h_inputRef.current.value/100;
        setBmi(w/(h*h)); }
    return(<>
    <h3>BMI Calculator</h3>
    <label for="weight">Weight:</label>
    <input type="text" ref={w_inputRef} id="weight"/> kg.<br/>
    <label for="height">Height:</label>
    <input type="text" ref={h_inputRef} id="height"/> cm.<br/>
    <button onClick={calBmi}>Calculate!</button><br/>
    BMI Value : {bmi.toFixed(2)}
    <BmiText bmi={bmi} />
    </>);
}