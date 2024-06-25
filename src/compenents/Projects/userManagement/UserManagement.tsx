import { useState } from "react"
import Userform from "./components/User-form/UserForm"
import Users from "./components/Users/Users"
import { User } from '../../../types'

const UsersManagement=()=> {
  const [users, setUsers] = useState<User[]>([
    {id: '1', name: 'Aidar', email: 'myEmail@gmail.com', activity: true, role: 'Admin'},
    {id: '2', name: 'Dima', email: 'myEmail@gmail.com', activity: false, role: 'Editor'},
  ])

  const addUser =(user: User)=>{
    setUsers(prev => [...prev, user]);
  }

  return (
    <>
      <h3 className="text-center mt-5 mb-4">User Management</h3>
      <main className="container-fluid">
        <div className="row mt-2 flex-wrap gap-4 justify-content-center">
          <div className="col-4" style={{minWidth: '300px'}}>
            <Userform onSubmit={addUser}></Userform>
          </div>
          <div className="col-4" style={{minWidth: '300px'}}>
            <Users users={users}></Users>
          </div>
        </div>
      </main>
    </>
  )
}

export default UsersManagement