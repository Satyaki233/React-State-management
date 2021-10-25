import React,{useContext} from 'react'
import {UsersContext } from '../App'

const List = () => {

    const user = useContext(UsersContext)
    return (
        <div>
          {user.UsersList.map(item=>
                 <div key={item.id}><h2>{item.firstname} - {item.lastname}</h2></div>
                )}
        </div>
    )
}

export default List;
