import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-dark-bg border-b border-hacker-green">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold hacker-text">
            Hackstory
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hacker-link">
              Home
            </Link>
            <Link to="/hacks" className="hacker-link">
              All Hacks
            </Link>
            <Link to="/quiz" className="hacker-link">
              Quiz
            </Link>
            <Link to="/team" className="hacker-link">
              Team
            </Link>
            <Link to="/about" className="hacker-link">
              About
            </Link>
            <Link to="/submit" className="hacker-link">
              Submit Hack
            </Link>
          </div>
          <button className="md:hidden text-hacker-green">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 