import { stat } from "fs";
import {useReducer } from "react";

type CounterState = {
    count : number
}

// creating this updateAction beacause we want seperate type for increament and decreament
type updateAction = {
    type : "increament" | "decreament",
    payload : number
}

// creating this resetAction beacause we want seperate type for reset
type resetAction = {
    type : "reset"
}

type CounterAction = updateAction | resetAction;

const initialState = {count : 0};

function reducer  (state:CounterState, action:CounterAction) {
    
    switch(action.type){
        case "increament" : return {count :state.count + action.payload}
        case "decreament" : return {count :state.count - action.payload}
        case "reset" : return initialState
        default :return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
    <>
        Count : {state.count}
        <button onClick={()=> dispatch({type:'increament', payload:1})}>+</button>
        <button disabled={state.count===0} onClick={()=> dispatch({type:'decreament', payload:1})}>-</button>
        {state.count>0 ?<button onClick={()=>dispatch({type:"reset"})}>Reset</button> :""}
        
    </>
    )
}