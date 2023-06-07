import React, { useState } from 'react'

function LoggedIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLoginLogout = () =>{
        setIsLoggedIn(!isLoggedIn);
    }
  

  return (
    <div>
    <button onClick={handleLoginLogout}>{isLoggedIn ? "Logout" : "Login"}</button>
    <div>User is {isLoggedIn ? "Logged In" : "Logged Out"}</div>
    </div>
  )
}

export default LoggedIn