import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="text-6xl font-bold hacker-text">404</h1>
      <p className="text-2xl text-hacker-blue">
        This hack has been lost in history...
      </p>
      <p className="text-gray-400 max-w-md">
        The historical event you're looking for seems to have been erased from
        our database. Maybe it was a classified operation?
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-hacker-green text-dark-bg font-bold rounded hover:bg-opacity-80 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound; 