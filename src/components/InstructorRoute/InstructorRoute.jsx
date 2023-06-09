import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../UseAuth/useAuth';

import useInstructor from '../useInstructor/useInstructor';

export default function InstructorRoute({ children }) {
  const { user, loading } = useAuth();
  const [isInstructor,
    isInstructorLoading] = useInstructor();
  const location = useLocation();
 
  if (loading || isInstructorLoading) {

    return <h1>Loading...</h1>;
  }

  if (user && isInstructor.instructor) {
    return children;
  }

  return (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
