import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import eventsData from '../data/events.json';

const AllHacks: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedCentury, setSelectedCentury] = useState<string>('all');

  const categories = useMemo(() => {
    const uniqueCategories = new Set(eventsData.events.map(event => event.category));
    return Array.from(uniqueCategories);
  }, []);

  const regions = useMemo(() => {
    const uniqueRegions = new Set(eventsData.events.map(event => event.region));
    return Array.from(uniqueRegions);
  }, []);

  const centuries = useMemo(() => {
    const uniqueCenturies = new Set(
      eventsData.events.map(event => Math.floor(event.year / 100) + 1)
    );
    return Array.from(uniqueCenturies).sort();
  }, []);

  const filteredEvents = useMemo(() => {
    return eventsData.events.filter(event => {
      const century = Math.floor(event.year / 100) + 1;
      return (
        (selectedCategory === 'all' || event.category === selectedCategory) &&
        (selectedRegion === 'all' || event.region === selectedRegion) &&
        (selectedCentury === 'all' || century.toString() === selectedCentury)
      );
    });
  }, [selectedCategory, selectedRegion, selectedCentury]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold hacker-text mb-8">All Historical Hacks</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <label className="block text-hacker-blue mb-2">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-dark-bg border border-hacker-green text-white p-2 rounded"
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-hacker-blue mb-2">Region</label>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="w-full bg-dark-bg border border-hacker-green text-white p-2 rounded"
          >
            <option value="all">All Regions</option>
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-hacker-blue mb-2">Century</label>
          <select
            value={selectedCentury}
            onChange={(e) => setSelectedCentury(e.target.value)}
            className="w-full bg-dark-bg border border-hacker-green text-white p-2 rounded"
          >
            <option value="all">All Centuries</option>
            {centuries.map(century => (
              <option key={century} value={century}>{century}th Century</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <Link
            key={event.id}
            to={`/event/${event.id}`}
            className="card group"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-bold hacker-text">{event.title}</h2>
              <span className="text-sm text-hacker-blue">{event.year}</span>
            </div>
            <p className="text-hacker-blue mb-2">{event.hackName}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-hacker-green bg-opacity-20 text-hacker-green text-sm rounded">
                {event.category}
              </span>
              <span className="px-2 py-1 bg-hacker-blue bg-opacity-20 text-hacker-blue text-sm rounded">
                {event.region}
              </span>
            </div>
            <p className="text-sm text-gray-300 line-clamp-2">
              {event.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllHacks; 