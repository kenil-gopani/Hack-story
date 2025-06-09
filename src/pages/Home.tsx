import React from 'react';
import { Link } from 'react-router-dom';
import events from '../data/events.json';

const Home: React.FC = () => {
  // Only show the first 10 events
  const displayedEvents = events.events.slice(0, 10);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Hackstory</h1>
        <p className="text-xl text-gray-300">
          Discover how historical events were actually epic hacks
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedEvents.map((event) => (
          <Link
            key={event.id}
            to={`/event/${event.id}`}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48">
              <img
                src={process.env.PUBLIC_URL + event.image}
                alt={event.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://source.unsplash.com/800x600/?${encodeURIComponent(event.title)}`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{event.title}</h2>
              <p className="text-green-400 mb-2">{event.hackName}</p>
              <div className="flex space-x-2 mb-4">
                <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                  {event.year}
                </span>
                <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                  {event.category}
                </span>
              </div>
              <p className="text-gray-300 line-clamp-3">{event.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home; 
