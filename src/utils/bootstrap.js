'use client';

// This file ensures Bootstrap JS is properly initialized in Next.js
import { useEffect } from 'react';

export const BootstrapClient = ({ children }) => {
  useEffect(() => {
    // This ensures Bootstrap's JavaScript is initialized after the component mounts
    // Only import Bootstrap JS on the client side
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return <>{children}</>;
};