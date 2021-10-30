import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useActions } from '../hooks/useAction'
//import { useSelector } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { fetchUsers,setUserPage } from '../store/action_creator/user'

const UserList:React.FC = () => {

    const {users,loading,error, page, limit} = useTypedSelector(state => state.user)
  const {fetchUsers,setUserPage} = useActions()
  const pages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
useEffect(() => {
    
    fetchUsers(page,limit)
}, [page])

if(loading){
    return <h1>Wait</h1>
}
if(error){
    return <h1>{error}</h1>
}

    return (
        <div style={{display: 'flex',flexDirection:'column'}}>
            {users.map(user =>
            
                <ul key={user.id}  style={{background:'silver', border: '5px solid black',padding:2}}>
                    {user.id} - {user.name} 
                <li>{user.currency}</li>
                <li>
                    {user.flag}
                    </li>
                </ul>)}
                {/* <div style={{display: 'flex'}}>
                {pages.map(p=>
                    <div
                    onClick={()=> setUserPage(p)}
                    style={{border:p === page ? '2px solid black' : '2px solid gray',padding:10}}
                    >

                    </div>
                    )}
                </div> */}
                
        </div>
    )
}

export default UserList
