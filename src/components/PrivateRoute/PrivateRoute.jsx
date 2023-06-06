import React from 'react'

import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../UseAuth/useAuth';


export default function PrivateRoute({children}) {
const{loading}=useAuth()
let location = useLocation();
if(loading){
    return <h1>.....Loading</h1>
}
if(user){
    return children
}
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}
