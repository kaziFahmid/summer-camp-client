import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../UseAuth/useAuth'
import { GiHamburgerMenu } from 'react-icons/gi';
export default function Header() {
  const[isHidden,setIsHidden]=useState(true)
  let handleNavMenu=()=>{
    setIsHidden(!isHidden)
  }
  const{user,logOut}=useAuth()
let handleLogout=()=>{
  
  logOut()
}
const[theme,setTheme]=useState(localStorage.getItem('theme')?localStorage.getItem('theme'):"light")

useEffect(()=>{
  localStorage.setItem('theme',theme)
  const localTheme=localStorage.getItem('theme')
  document.querySelector('html').setAttribute('data-theme',localTheme)
},[theme])

let handleMode=()=>{
  document.location.reload()
  if(theme=="light"){

    setTheme("dark")
    
  }
  else{

    setTheme("light")
   
  }
  
}
  return (
<>
<header className='flex justify-between items-center pt-8 lg:px-24'>
  <div>
    <h2 className='text-2xl font-bold'>Summer<span className='font-bold text-orange-400'>Camp</span></h2>
  </div>
<div className="lg:hidden block " onClick={handleNavMenu}>
  <button className='btn '>{isHidden?<GiHamburgerMenu/>:'X'}</button>
</div>
  <ul className=" justify-center items-center hidden  lg:flex gap-5  text-black  ">
   <li className= {` hover:text-orange-500 duration-200 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}><Link to='/'>Home</Link></li><li className={` hover:text-orange-500  duration-200 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}><Link to='/instructors'>Instructors</Link></li><li className={` hover:text-orange-500  duration-200 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}><Link to='/classes'>Classes</Link></li>
   {user?.email&&<li className={` duration-200 hover:text-orange-500 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}><Link to='/dashboard'>Dashboard</Link></li>}
 {user?.email&&<li > <Link><img src={user?.photoURL} style={{ width: '30px', height: '30px', borderRadius: '50%', objectFit: 'cover' }}/></Link></li>}

 <li>  <button className='btn hidden md:block' onClick={handleMode}>{theme === 'dark' ? 'Light' : 'Dark'}</button></li>
  {user?.email?<li><Link onClick={handleLogout} className="btn  hover:bg-orange-500 hover:text-white md:flex hidden" >Logout</Link></li>:<li><Link className="btn px-7   bg-orange-500 text-white  hidden lg:flex "  to='/login'>Login</Link></li>}  

  {user?'': <li><Link className={`underline  ${theme === 'dark' ? 'text-white' : 'text-black'}  hidden lg:flex`} to='/signup'>Signup</Link></li>}

    </ul>
</header>




 <ul className={`justify-center items-center mt-9 ${isHidden?'hidden':"flex"} flex-col lg:hidden gap-5  text-black`}>
   <li className= {` hover:text-orange-500 duration-200 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}><Link to='/'>Home</Link></li><li className={` hover:text-orange-500  duration-200 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}><Link to='/instructors'>Instructors</Link></li><li className={` hover:text-orange-500  duration-200 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}><Link to='/classes'>Classes</Link></li>
   {user?.email&&<li className={` duration-200 hover:text-orange-500 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}><Link to='/dashboard'>Dashboard</Link></li>}
 {user?.email&&<li > <Link><img src={user?.photoURL} style={{ width: '30px', height: '30px', borderRadius: '50%', objectFit: 'cover' }}/></Link></li>}

 <li>  <button className='btn  md:block' onClick={handleMode}>{theme === 'dark' ? 'Light' : 'Dark'}</button></li>
  {user?.email?<li><Link onClick={handleLogout} className="btn   hover:text-white md:flex" >Logout</Link></li>:<li><Link className="btn px-7   bg-orange-500 text-white   lg:flex "  to='/login'>Login</Link></li>}  

  {user?'': <li><Link className={`underline  lg:flex ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`} to='/signup'>Signup</Link></li>}

    </ul>































</>
  )
}
