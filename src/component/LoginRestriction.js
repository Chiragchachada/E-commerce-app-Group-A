import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function LoginRestriction(props) {

  const user = useSelector((state) => {
    console.log(state)
      return state.au.auth
    })
  return (
      <div>
                  {!user.auth  ? <Outlet/> : <Navigate to="/"/>}

      </div>
    )
}
