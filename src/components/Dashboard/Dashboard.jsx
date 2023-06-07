import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
  <>
  
  <div className="flex flex-col lg:flex-row">
  <div className="w-full lg:w-80 h-screen bg-base-200">
    <ul className="menu p-4 mt-14">

      <li>
        <Link>My Enrolled Classes</Link>
      </li>
      <li>
        <Link to="/">My Enrolled Classes</Link>
      </li>

    </ul>


  </div>

  <div className="flex-grow">
    <nav className="bg-pink-500 text-primary-content p-4">
      <h1 className="text-2xl text-white font-bold">Dashboard</h1>
    </nav>
    <div className="p-4">
      <Outlet />
    </div>
  </div>
</div>
  
  
  </>
  );
}
