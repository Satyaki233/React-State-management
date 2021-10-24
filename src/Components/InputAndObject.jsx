import React,{useState} from 'react'

const InputAndObject = () => {
    const [name , setname ] = useState({firstname: '' , lastname: ''});
    return (
        <div>
            <input type="text" value={name.firstname} onChange={e => setname({...name ,firstname : e.target.value})}/>
            <input type="text" value={name.lastname} onChange={e => setname({...name ,lastname: e.target.value})}/>
             <div>
                 firstname = {name.firstname},
                 lastname = {name.lastname}
             </div>
        </div>
    )
}

export default InputAndObject
