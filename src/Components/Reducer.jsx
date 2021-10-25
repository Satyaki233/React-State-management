import React,{useReducer} from 'react'

const initState = {
    firstCounter: 0 ,
    secondCounter: 10
} ;
const reducer = (state , action ) =>{
      switch(action.type){
          case 'increment' :
              return {...state, firstCounter: state.firstCounter + action.value }
          case 'decrement' :
              return {...state, firstCounter: state.firstCounter - action.value }
          case 'increment2':
              return {...state,secondCounter: state.secondCounter + 10 }    
          case 'decrement2':
              return {...state, secondCounter: state.secondCounter - 10}    
          case 'reset' :
              return initState 
          default:
              return state             
      }
}


const Reducer = () => {
    const [count , dispatch ] = useReducer(reducer , initState);
    return (
        <div>
          first -   {count.firstCounter} <br/>
          second - {count.secondCounter} <br/>
            <button onClick={()=>{dispatch({type :'increment' , value : 1})}}>+</button>
            <button onClick={()=>{dispatch({type:'decrement' , value : 1})}}>-</button>
            <button onClick={()=>{dispatch({type:'increment2'})}}>+2</button>
            <button onClick={()=>{dispatch({type:'decrement2'})}}>-2</button>
            <button onClick={()=>{dispatch({type : 'reset'})}}>reset</button>

        </div>
    )
}

export default Reducer
