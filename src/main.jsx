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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MySelectedClass from './components/MySelectedClass/MySelectedClass';
import MyEnrolledClass from './components/MyEnrolledClass/MyEnrolledClass';
import AddaClass from './components/AddaClass/AddaClass';
import MyClasses from './components/MyClasses/MyClasses';
import Payment from './components/Payment/Payment';
import PaymentHistory from './components/PaymentHistory/PaymentHistory';
import ErrorPage from './components/ErrorPage/ErrorPage';
import AdminRoute from './components/AdminRoute/AdminRoute';
import InstructorRoute from './components/InstructorRoute/InstructorRoute';
import StudentRoute from './components/StudentRoute/StudentRoute';

axios.defaults.baseURL=`http://localhost:5000/`
axios.interceptors.request.use((req)=>{return req})
axios.interceptors.response.use((res)=>{return res.data})

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage />,
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
    element:<PrivateRoute><Dashboard/></PrivateRoute>,
    children:[
      {
        path:'/dashboard/admin/manageusers',
        element:<AdminRoute><ManageUsers/></AdminRoute>
        
      },
      {
        path:'/dashboard/admin/manageclass',
        element:<AdminRoute><ManageClass/></AdminRoute>
      },
      {
        path:'/dashboard/student/myselectedclass',
        element:<StudentRoute><MySelectedClass/></StudentRoute>
      },
      {
        path:'/dashboard/student/myenrolledclass',
        element:<StudentRoute><MyEnrolledClass/></StudentRoute>
      },
      {
        path:'/dashboard/student/paymenthistory',
        element:<StudentRoute><PaymentHistory/></StudentRoute>
      },
      {
        path:'/dashboard/instructor/addaclass',
        element:<InstructorRoute><AddaClass/></InstructorRoute>
      },
      {
        path:'/dashboard/instructor/myclasses',
        element:<InstructorRoute><MyClasses/></InstructorRoute>
        
      },
    
      {
        path:'/dashboard/payment/:id',
        element:<Payment/>,
        loader: ({params})=>fetch(`http://localhost:5000/myselectedclass/${params.id}`)
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
