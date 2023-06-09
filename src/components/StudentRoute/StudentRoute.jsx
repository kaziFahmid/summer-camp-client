import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../UseAuth/useAuth';
import useStudent from '../useStudent/useStudent';



export default function StudentRoute({ children }) {
  const { user, loading } = useAuth();
  const[student,isStudentLoading] = useStudent();
  const location = useLocation();
 
  if (loading || isStudentLoading) {

    return <h1>Loading...</h1>;
  }

  if (user && student.student) {
    return children;
  }

  return (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
