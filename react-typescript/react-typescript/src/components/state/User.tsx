import React, { useState } from 'react'

type AuthUser = {
    name: string,
    email: string
}

const User = () => {

    const [user, setUser] = useState <AuthUser> ({} as AuthUser) // we do this because we say that AuthUser will not be null in this way we lying to typescript that empty user is of type AuthUser this is called type assertion
    
    const handleLogin = () => {
        setUser({
            name :"Jai krishna",
            email : "jksingh@gmail.com"
        })
    }
    // const handleLogout = () => {
    //     setUser(null);
    // }


  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        {/* <button onClick={handleLogout}>Logout</button> */}
        <div>User is {user?.name}</div>
        <div>Email is {user?.email}</div>
    </div>
  )
}

export default User