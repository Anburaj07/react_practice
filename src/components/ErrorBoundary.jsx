import React, { useEffect, useState } from 'react';

export const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error) => {
      console.error('Error caught by error boundary:', error);
      setHasError(true);
    };

    // Setup error event listener
    window.addEventListener('error', handleError);

    return () => {
      // Clean up event listener when the component is unmounted
      window.removeEventListener('error', handleError);
    };
  }, []); // Empty dependency array to run this effect only once during component mount

  if (hasError) {
    // Fallback UI when an error occurs
    return <div>Something went wrong. Please try again later.</div>;
  }

  return children; // Render the child components if there's no error
};



