import {useState} from "react"

export function Notebooks(){
    const[notebook,setNotebook] = useState(0);

    const addNotebooks = (value)=>{
        setNotebook(notebook + value);
    }
    return (
        <div className="items">
            <span>Noteooks:{notebook}</span>
            <button className ="addNotebook" onClick = {() =>{addNotebooks(1)}}>+</button>
            <button className ="remNotebook" onClick = {()=>{
                if(notebook >= 1){
                    addNotebooks(-1)}}
                }
                >-</button>
        </div>
    )
}