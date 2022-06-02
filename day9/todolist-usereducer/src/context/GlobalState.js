import React,{createContext,useReducer} from "react";
import AppReducer from './AppReducer.js'

const initialState={
    todos:[
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);

    function deletetodo(id){
        dispatch({
            type:'DELETE_TODO',
            payload:id
        });
    }
    function addtodo(todo){
        dispatch({
            type:'ADD_TODO',
            payload:todo
        });

        
    }

    return (
        <GlobalContext.Provider value={{
            todos: state.todos,
            deletetodo,
            addtodo
        }}>
            {children }
        </GlobalContext.Provider>
    );
}