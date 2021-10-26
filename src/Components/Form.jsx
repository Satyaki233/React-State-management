import React,{useState , useContext } from 'react'
import {UsersContext } from '../App'

const Form = () => {
    const user = useContext(UsersContext);
    const [name , setname ] = useState({firstname: '' , lastname: ''});
    const addInList =() =>{
        console.log(name);
        user.userDispatch({type : 'addUser' , value : name})
        clearInput();
    }

    const clearInput =()=>{
        setname({firstname: '' , lastname: ''})
    } 
    
    return (
        <div>
            <input type="text" value={name.firstname} onChange={e => setname({...name ,firstname : e.target.value})}/>
            <input type="text" value={name.lastname} onChange={e => setname({...name ,lastname: e.target.value})}/>
             <div>
                 firstname = {name.firstname},
                 lastname = {name.lastname}
             </div>
             <button onClick={addInList}>Add in List </button>
             
        </div>
    )
}

export default Form;
