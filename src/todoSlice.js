import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
    
        todo: []
    },
    reducers: {
        addTodo: (state,action) => {
            state.todo.push(action.payload)
        },
        removeElement: (state, action) =>{

        }
    }
});


export const { addTodo, removeElement } = todoSlice.actions;


export const selectTodoList= state => state.todo.todo;

// imported by the store
export default todoSlice.reducer;
