import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../UseAuth/useAuth';
import useAdmin from '../useAdmin/useAdmin';

export default function AdminRoute({ children }) {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
 
  if (loading || isAdminLoading) {

    return <h1>Loading...</h1>;
  }

  if (user && isAdmin.admin) {
    return children;
  }

  return (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
