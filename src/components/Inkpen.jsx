import {useState} from "react"

export function Inkpens(){
    const[inkpen,setInkpen] = useState(0);

    const addInkens = (value)=>{
        setInkpen(inkpen + value);
    }
    return (
        <div className="items">
            <span>Inkpens:{inkpen}</span>
            <button className ="addInkpen" onClick = {() =>{addInkens(1)}}>+</button>
            <button className ="remInkpen" onClick = {()=>{
                if(inkpen >=1){
                    addInkens(-1)}}
                }
                >-</button>
                
        </div>
    )
}