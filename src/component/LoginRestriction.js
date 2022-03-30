import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function LoginRestriction(props) {
  return (
      <div>
                  {!props.isLoggedIn  ? <Outlet/> : <Navigate to="/"/>}

      </div>
    )
}
