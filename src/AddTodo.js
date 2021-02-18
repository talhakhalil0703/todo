import React, {useState}from 'react'
import {useDispatch} from "react-redux"
import {addTodo} from "./todoSlice"

const AddTodo = () =>{
    const dispatch = useDispatch();
    const [item, setItem] = useState('')
    const [date, setDate] = useState('')

    const itemChange = (e) =>{
        setItem(e.target.value)
    }
    const dateChange = (e) =>{
        setDate(e.target.value)
    }

    return (
        <div>
            <input type="text" value = {item} placeholder="TODO item" name="item" onChange={(e)=>itemChange(e)}/> 
            <input type="text" value = {date} placeholder="Date" name="date" onChange={(e)=>dateChange(e)}/>
            <button onClick={()=>dispatch(addTodo({item, date}))}>Add</button>
        </div>
    )
}

export default AddTodo