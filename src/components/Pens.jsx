import {useState} from "react"

export function Pens(){
    const[pen,setPen] = useState(0);

    const addPens = (value)=>{
        setPen(pen + value);
    }
    return (
        <div className="items">
            <span>Pens:{pen}</span>
            <button className ="addBook" onClick = {() =>{addPens(1)}}>+</button>
            <button className ="remBook" onClick = {()=>{
                addPens(-1)}}>-</button>
        </div>
    )
}