import React,{useState} from 'react'

const HooksCounter = () => {

    const [items , setitems ] = useState([]);
    const addItem = () =>{
        setitems([...items , {
            id: items.length,
            value: Math.floor(Math.random() * 10 ) + 1 
        }]);
    }
    return (
        <div>
            <button onClick={addItem}>Add</button>
            {items.map(item=>
                 <div key={item.id}><li>{item.value}</li></div>
                )}
        </div>
    )
}

export default HooksCounter
