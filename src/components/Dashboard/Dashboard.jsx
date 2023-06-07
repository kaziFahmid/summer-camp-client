import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import anime from 'animejs/lib/anime.es.js';
import { Fade } from "react-awesome-reveal";

export default function Dashboard() {

  anime({
    targets: '#sidebar',
    width: '100%', 
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true
  });

  const [isAdmin,setIsAdmin]=useState(true)
  
  const [isInstructor,setIsInstructor]=useState(false)
  return (
  <>
  
  <div className="flex flex-col lg:flex-row">
  <div className="w-full lg:w-80 h-screen bg-base-200   "  >
    <div id='sidebar' className='w-full mt-2 bg-slate-300'>
Welcome 
    </div>

{/* Admin */}

{isAdmin?<ul className="menu p-4 mt-14  " >

<li>
  <Link to='/dashboard/admin/manageclass' >   Manage Classes</Link>
</li>
  
<li>
  <Link  to='/dashboard/admin/manageusers' >  Manage Users</Link>
</li>

</ul>:<ul className="menu p-4 mt-14  " >

<li>
  <Link>My Selected Classes</Link>
</li>
<li>
  <Link >My Enrolled Classes</Link>
</li>

</ul>}





{/* student */}

    



    {isInstructor&&<ul className="menu p-4 mt-14  " >

<li>
  <Link>    Add a Class</Link>
</li>
  
<li>
  <Link >  My Classes</Link>
</li>

</ul>
}








  </div>

  <div className="flex-grow">
    <nav className="bg-pink-500 text-primary-content p-4">
     <Fade><h1 className="text-2xl text-white font-bold">Dashboard</h1></Fade> 
    </nav>
    <div className="p-4">
      <Outlet />
    </div>
  </div>
</div>
  
  
  </>
  );
}
