import {useRef} from 'react';

export default function Form(){
        const inputRef = useRef(null);
        function handClick(){
                //inputRef.current.focus();
                alert(inputRef.current.value);
        }
        return (<>
        <input ref={inputRef} />
        <button onClick={()=>alert(inputRef.current.value)}> Focus the input</button>
        </>);
}