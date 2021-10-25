import React,{useReducer} from 'react'
import Reducer01 from './Reducer01';

export const CounterContext = React.createContext();

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
            <CounterContext.Provider vlaue={{
                 countState: count , countDispatch: dispatch
            }}>

                </CounterContext.Provider>
          first -   {count.firstCounter} <br/>
          second - {count.secondCounter} <br/>
          <Reducer01/>
           
        </div>
    )
}

export default Reducer
