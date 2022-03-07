import {useState} from "react"

export function Books(){
    const[book,setBook] = useState(0);

    const addBooks = (value)=>{
        setBook(book + value);
    }
    return (
        <div className="items">
            <span>Books:{book}</span>
            <button className ="addBook" onClick = {() =>{addBooks(1)}}>+</button>
            <button className ="remBook" onClick = {()=>{
                if(book >= 1){
                    addBooks(-1)}}
                }
                >-</button>
        </div>
    )
}