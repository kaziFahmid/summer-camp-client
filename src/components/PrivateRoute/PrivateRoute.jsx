import React, { useEffect } from 'react'

import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../UseAuth/useAuth';


export default function PrivateRoute({children}) {
  const {user,loading}=useAuth()

let location = useLocation();
useEffect(() => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {

    document.documentElement.setAttribute('data-theme', storedTheme);
  }
}, []);
if(loading){
    return <h1>.....Loading</h1>
}
if(user){
    return children
}
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}
