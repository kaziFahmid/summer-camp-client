import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../UseAuth/useAuth'

export default function Header() {
  const{user,logOut}=useAuth()
let handleLogout=()=>{
  console.log("asdfasdf")
  logOut()
}
const[theme,setTheme]=useState(localStorage.getItem('theme')?localStorage.getItem('theme'):"light")

useEffect(()=>{
  localStorage.setItem('theme',theme)
  const localTheme=localStorage.getItem('theme')
  document.querySelector('html').setAttribute('data-theme',localTheme)
},[theme])

let handleMode=()=>{
  if(theme=="light"){
    setTheme("dark")
  }
  else{
    setTheme("light")
  }
}
  return (
<>
<div className='bg-pink-400'>
<p className='text-white ms-4'> 57/A, GREEN LANE, NYC  +10 (78) 367 3692</p>

</div>
<div className="navbar bg-base-100">
  <button className='btn hidden md:block' onClick={handleMode}>{theme === 'dark' ? 'Light' : 'Dark'}</button>
  <div className="navbar-start">
    <div className="dropdown z-50">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li className='mt-3  hover:text-pink-500'><Link to='/'>Home</Link></li><li className='mt-3 hover:text-pink-500'><Link to='/instructors'>Instructors</Link></li><li className='mt-3 hover:text-pink-500 '><Link to='/classes'>Classes</Link></li><li className='mt-3 hover:text-pink-500' ><Link to='/dashboard'>Dashboard</Link></li>
      <button className='btn  md:hidden' onClick={handleMode}>{theme === 'dark' ? 'Light' : 'Dark'}</button>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">SummerCamp</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className=" justify-center items-center menu menu-horizontal flex gap-5 px-1 text-black font-bold ">
   <li className= {`mt-3 hover:text-pink-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}><Link to='/'>Home</Link></li><li className={`mt-3 hover:text-pink-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}><Link to='/instructors'>Instructors</Link></li><li className={`mt-3 hover:text-pink-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}><Link to='/classes'>Classes</Link></li>
   {user?.email&&<li className={`mt-3 hover:text-pink-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}><Link to='/dashboard'>Dashboard</Link></li>}
 {user?.email&&<li > <Link><img src={user?.photoURL} style={{ width: '30px', height: '30px', borderRadius: '50%', objectFit: 'cover' }}/></Link></li>}  
    </ul>
  </div>
  <div className="navbar-end">
    {user?.email?<Link onClick={handleLogout} className="btn mr-5  hover:bg-pink-500 hover:text-white" >LogOut</Link>:<Link className="btn mr-5  hover:bg-pink-500 hover:text-white"  to='/login'>Login</Link>}
   {user?'': <Link className="btn mr-5 bg-pink-500 text-white" to='/signup'>Signup</Link>}
  </div>
</div>
</>
  )
}
