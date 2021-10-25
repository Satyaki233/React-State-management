import React,{useState , useContext } from 'react'


const Form = () => {
   
    const [name , setname ] = useState({firstname: '' , lastname: ''});
    const addInList =() =>{
        console.log(name)
       
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
