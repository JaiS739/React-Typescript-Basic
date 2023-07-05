import { stat } from "fs";
import {useReducer } from "react";

type CounterState = {
    count : number
}

type CounterAction = {
    type:string,
    payload: number
}

const initialState = {count : 0};

function reducer  (state:CounterState, action:CounterAction) {
    const {type, payload} = action;
    switch(type){
        case "increament" : return {count :state.count + payload}
        case "decreament" : return {count :state.count - payload}
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
    </>
    )
}