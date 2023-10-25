import { useRef,useState } from "react"

export default function DemoUseRef(props){
    const [info,setInfo] = useState({});
    const name = useRef();
    const age = useRef();
    function handleChange(){
        setInfo({...info,name: name.current.value,age:age.current.value})
    }
    console.log(props.id);
    console.log(info);

    return(
        <>
            <input ref={name} onChange={handleChange} type="text" placeholder="Ho va ten..." />
            <input ref={age} onChange={handleChange} type="text" placeholder="Tuoi..."/>
        </>
    )
}