import React ,{useState } from 'react'
import './App.css';
import Form from './Components/Form';
import List from './Components/List';
import Reducer from './Components/Reducer';

export const UsersContext = React.createContext()

function App() {
  const [lists , setlist ] = useState([
    { 
      id:1,
      firstname : 'John',
      lastname : 'Curter'
    },
    { 
      id:2,
      firstname : 'Satyaki',
      lastname : 'De Sarkar'
    }
  ])
  return (
    <div className="App">
      <UsersContext.Provider value={{ UsersList :lists , setUsersList : setlist }}>
      <Form/>
      <List/>
      <Reducer/>
      </UsersContext.Provider>
    </div>
  );
}

export default App;
