import React from "react";
import { User } from "../../../../../types";
import UsersItems from "./Users-items";

interface Props{
    users: User[];
}

const Users:React.FC<Props> =({users})=>{



    return(
        <>
        <div>
            <h4 className="text-bg-dark p-2 rounded">
                Users
            </h4>
            {users.map(user =>{
                return(
                    <UsersItems key={user.id} user={user}></UsersItems>
                )
            })}
        </div>
        </>
    )
}

export default Users