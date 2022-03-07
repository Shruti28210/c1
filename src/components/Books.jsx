import {useState} from "react"

export function Books(){
    const[book,setBook] = useState(0);

    const addBooks = ()=>{
        setBook(book + 1);
    }
    return (
        <div className="items">
            <span>Books:0</span>
            <button className ="addBook" onClick = {() =>{addBooks}}>+</button>
            <button className ="remBook">-</button>
        </div>
    )
}