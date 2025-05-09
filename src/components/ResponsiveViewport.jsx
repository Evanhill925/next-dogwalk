"use client"

import { useEffect } from 'react';

// This component ensures proper viewport settings for responsive design
export default function ResponsiveViewport() {
  useEffect(() => {
    // This function updates the viewport meta tag to ensure proper scaling on mobile devices
    const updateViewport = () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';
      } else {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';
        document.head.appendChild(meta);
      }
    };

    // Update viewport on component mount
    updateViewport();

    // Add event listener for orientation changes
    window.addEventListener('orientationchange', updateViewport);

    // Cleanup
    return () => {
      window.removeEventListener('orientationchange', updateViewport);
    };
  }, []);

  return null; // This component doesn't render anything
}