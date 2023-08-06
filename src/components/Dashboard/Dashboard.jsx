import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import anime from 'animejs/lib/anime.es.js';
import { Fade } from "react-awesome-reveal";
import useAdmin from '../useAdmin/useAdmin';
import useInstructor from '../useInstructor/useInstructor';
import useStudent from '../useStudent/useStudent';
import { MdClass, MdPayments } from 'react-icons/Md';
import { AiOutlinePlus } from 'react-icons/Ai';
import { FaUserAlt } from 'react-icons/Fa';
export default function Dashboard() {

  anime({
    targets: '#sidebar',
    width: '100%', 
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true
  });

  const [isAdmin]=useAdmin()

  const[isInstructor]=useInstructor()
  const[student]=useStudent()
  console.log(student.student)

  return (
  <>
  
  <div className="flex flex-col lg:flex-row">
  <div className="w-full lg:w-80 h-screen bg-base-200   "  >
    <div id='sidebar' className='w-full mt-2 bg-slate-300'>
Welcome 
    </div>

{/* Admin */}


{isAdmin.admin&&<ul className="menu p-4 mt-14  " >
<li className='text-center text-3xl'>
 Admin
</li>
  
<li className='mt-8'>
  <Link to='/dashboard/admin/manageclass' > <MdClass/>  Manage Classes</Link>
</li>
  
<li>
  <Link  to='/dashboard/admin/manageusers' > <FaUserAlt/> Manage Users</Link>
</li>

</ul>}






{student.student&&<ul className="menu p-4 mt-14  " >
<li className='text-center text-3xl'>
 Student
</li>
<li className='mt-8'>
  <Link to='/dashboard/student/myselectedclass'>  <MdClass/>My Selected Classes</Link>
</li>
<li>
  <Link  to='/dashboard/student/myenrolledclass' >   <MdClass/>My Enrolled Classes</Link>
</li>
<li>
  <Link  to='/dashboard/student/paymenthistory'><MdPayments/> Payment History</Link>
</li>

</ul>}


{isInstructor.instructor&&<ul className="menu p-4 mt-14  " >
<li className='text-center text-3xl'>
Instructor
</li>
<li className='mt-8'>
  <Link to='/dashboard/instructor/addaclass'> <AiOutlinePlus/>   Add a Class</Link>
</li>
  
<li>
  <Link to='/dashboard/instructor/myclasses'> <MdClass/> My Classes</Link>
</li>

</ul> 
}









  </div>

  <div className="flex-grow">
    <nav className="bg-orange-500 text-primary-content p-4">
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
