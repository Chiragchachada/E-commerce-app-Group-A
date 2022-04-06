import React from 'react'
import { useSelector } from 'react-redux';

import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute(props) {
  const user = useSelector((state) => {
    console.log(state)
      return state.au.auth
    })
    

  return (
    <div>
        {user.auth? <Outlet/> : <Navigate to="/login"/>}
    </div>
  )
}
