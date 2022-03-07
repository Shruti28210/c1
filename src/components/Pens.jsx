import {useState} from "react"

export function Pens(){
    const[pen,setPen] = useState(0);

    const addPens = (value)=>{
        setPen(pen + value);
    }
    return (
        <div className="items">
            <span>Pens:{pen}</span>
            <button className ="addPen" onClick = {() =>{addPens(1)}}>+</button>
            <button className ="remPen" onClick = {()=>{
                if(pen >=1){
                    addPens(-1)}}
                }
                >-</button>
        </div>
    )
}