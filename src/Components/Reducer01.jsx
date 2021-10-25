import React,{useContext} from 'react'
import {CounterContext} from './Reducer'

const Reducer01 = () => {
const Count = useContext(CounterContext);
    return (
        <div>
            <button onClick={()=>{Count.countDispatch({type :'increment' , value : 1})}}>+</button>
            <button onClick={()=>{Count.countDispatch({type:'decrement' , value : 1})}}>-</button>
            <button onClick={()=>{Count.countDispatch({type:'increment2'})}}>+2</button>
            <button onClick={()=>{Count.countDispatch({type:'decrement2'})}}>-2</button>
            <button onClick={()=>{Count.countDispatch({type : 'reset'})}}>reset</button>
        </div>
    )
}

export default Reducer01
