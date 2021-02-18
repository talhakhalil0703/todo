import {useSelector, useDispatch} from "react-redux"
import {selectTodoList, removeElement} from "./todoSlice"

const TodoList = () =>{

const List = useSelector(selectTodoList)
const dispatch = useDispatch();

const remove = (index) =>{
    dispatch(removeElement(index))
}

return (
    <div>
    {List.map((todo, index)=>{
        return(
            <div key={index}>
            <h1>{todo.item}: {todo.date}</h1>
            <button onClick={(index)=>remove(index)}>X</button>
            </div>
        )
    })}
    </div>
    
)
} 

export default TodoList