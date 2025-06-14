import { ReactNode } from 'react';
import { useAuth } from "@/contexts/AuthContext";
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
  children: ReactNode;
  adminOnly?: boolean;
}

export default function RequireAuth({ children, adminOnly = false }: RequireAuthProps) {
  const { user, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }
  
  // If admin-only route and user is not admin
  if (adminOnly && (!user || user.role !== 'admin')) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  
  // For regular protected routes
  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

// Helper function to check if a user is admin (can be used elsewhere in the app)
export function checkIsAdmin(user: any): boolean {
  return user && user.role === 'admin';
}