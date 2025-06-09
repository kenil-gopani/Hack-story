import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold hacker-text">About Hackstory</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-bold hacker-text">The Project</h2>
        <p className="text-gray-300">
          Hackstory is a unique way to explore historical events through the lens
          of hacking and cybersecurity. We reimagine significant moments in
          history as if they were digital exploits, making history more engaging
          and relatable to the tech-savvy generation.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold hacker-text">Inspiration</h2>
        <p className="text-gray-300">
          The project was inspired by the parallels between historical events and
          modern-day hacking. Just as hackers find creative ways to overcome
          security measures, historical figures and movements often had to find
          innovative solutions to overcome barriers and achieve their goals.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold hacker-text">Tools Used</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>React.js - Frontend framework</li>
          <li>TypeScript - Type-safe JavaScript</li>
          <li>Tailwind CSS - Utility-first CSS framework</li>
          <li>React Router - Client-side routing</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold hacker-text">Goals</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Make history more engaging and accessible</li>
          <li>Bridge the gap between historical events and modern technology</li>
          <li>Encourage critical thinking about historical events</li>
          <li>Provide an interactive learning experience</li>
        </ul>
      </section>
    </div>
  );
};

export default About; 