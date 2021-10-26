import React ,{useReducer , useEffect} from 'react'
import './App.css';
import Form from './Components/Form';
import List from './Components/List';
import Reducer from './Components/Reducer';

export const UsersContext = React.createContext()
const initState = []

const reducer = (state , action ) =>{
  switch(action.type){
    case 'addUser':
      return [...state , action.value]
    case 'reset':
      return initState
    default:
      return state  
  }
}

function App() {

  const [user , dispatch ] = useReducer(reducer , initState );

  const isLocalSave =()=>{
    var localData = [];
   localData =  localStorage.getItem('user');
   if(localData){

     console.log(JSON.parse(localData));
     const prevData = JSON.parse(localData);
     prevData.map(item=>{
       dispatch({type:'addUser', value : item });
     })
     data();
   }
  }

  const data =()=>{
    console.log(user);
    console.log(initState);
  }

  useEffect(()=>{
   isLocalSave();
  },[])

  const saveLocal =() =>{
    localStorage.setItem('user',JSON.stringify(user))
    alert('Save in LocalStorage');
  }
  
  return (
    <div className="App">
      <UsersContext.Provider value={{
        userState : user , userDispatch : dispatch
      }}>
      <Form/>
      <List/>
      <button onClick={saveLocal}>Save</button>
      {/* <Reducer/> */}
      </UsersContext.Provider>
    </div>
  );
}

export default App;
