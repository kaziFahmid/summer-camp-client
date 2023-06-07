import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Login from './components/Registration/Login/Login';
import Signup from './components/Registration/Signup/Signup';
import AuthProvider from './components/AuthProvider/AuthProvider';
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Instructors from './components/Instructors/Instructors';
import Classes from './components/Classes/Classes';
import Dashboard from './components/Dashboard/Dashboard';
import axios from 'axios';
import ManageClass from './components/Dashboard/Admin/ManageClass';
import ManageUsers from './components/Dashboard/Admin/ManageUsers';

axios.defaults.baseURL=`http://localhost:5000/`
axios.interceptors.request.use((req)=>{return req})
axios.interceptors.response.use((res)=>{return res.data})

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/instructors',
        element:<Instructors/>
      },
      {
        path:'/classes',
        element:<Classes/>
      },
    ]
  },

  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },

  {
    path:'/dashboard',
    element:<Dashboard/>,
    children:[
      {
        path:'/dashboard/admin/manageusers',
        element:<ManageUsers/>,
      },
      {
        path:'/dashboard/admin/manageclass',
        element:<ManageClass/>,
      }
    ]

  },
]);











ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
      <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>


  </React.StrictMode>
)
