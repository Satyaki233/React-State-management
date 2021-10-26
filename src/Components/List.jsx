import React,{useContext} from 'react'
import {UsersContext } from '../App'

const List = () => {

    const user = useContext(UsersContext)
    return (
        <div>
          {user.userState.map(item=>
                 <div key={Math.random()}><h2>{item.firstname} - {item.lastname}</h2></div>
                )}
        </div>
    )
}

export default List;
