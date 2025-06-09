import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import events from '../data/events.json';

const EventPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const event = events.events.find(e => e.id === Number(id));

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center">Event not found</h1>
      </div>
    );
  }

  const handleQuizSubmit = () => {
    setShowResult(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${event.image})`,
            transform: 'scale(1.1)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <h1 className="text-6xl font-bold mb-4">{event.title}</h1>
            <p className="text-green-400 text-3xl mb-6">{event.hackName}</p>
            <div className="flex space-x-4">
              <span className="px-6 py-3 bg-gray-800/80 backdrop-blur-sm rounded-full text-lg font-semibold">
                {event.year}
              </span>
              <span className="px-6 py-3 bg-gray-800/80 backdrop-blur-sm rounded-full text-lg font-semibold">
                {event.category}
              </span>
              <span className="px-6 py-3 bg-gray-800/80 backdrop-blur-sm rounded-full text-lg font-semibold">
                {event.region}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Description and Timeline */}
          <div className="lg:col-span-2 space-y-12">
            {/* The Hack Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-4xl font-bold mb-6 text-green-400">The Hack</h2>
              <div className="space-y-6">
                <p className="text-xl leading-relaxed">{event.description}</p>
                <p className="text-xl leading-relaxed text-gray-300">
                  This groundbreaking event represented a masterful exploitation of system vulnerabilities, 
                  demonstrating how human ingenuity and collective action can overcome seemingly insurmountable 
                  barriers. The hack's success lay not just in its execution, but in its ability to inspire 
                  similar movements worldwide.
                </p>
                <p className="text-xl leading-relaxed text-gray-300">
                  The technical aspects of this hack involved careful planning, precise timing, and the 
                  coordination of multiple elements. Each component played a crucial role in the overall 
                  success, creating a perfect storm of circumstances that led to the ultimate breakthrough.
                </p>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-4xl font-bold mb-12 text-green-400">Timeline</h2>
              <div className="relative">
                {/* Timeline Line with Enhanced Gradient */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-green-400 to-green-500/30">
                  <div className="absolute inset-0 bg-green-500/20 blur-sm"></div>
                </div>
                
                {/* Timeline Events */}
                <div className="space-y-12">
                  {event.timeline.map((item, index) => (
                    <div key={index} className="relative pl-16">
                      {/* Date with Dot */}
                      <div className="flex items-start">
                        <div className="absolute left-8 top-0 flex items-center">
                          <div className={`w-3 h-3 -ml-[0.375rem] bg-green-500 rounded-full shadow-lg shadow-green-500/20 ${index === 2 ? 'ring-2 ring-green-500/30' : ''}`}></div>
                        </div>
                        <div className="ml-4">
                          <span className="inline-block px-3 py-1 bg-green-500/10 rounded text-green-400 font-bold text-sm">
                            {item.date}
                          </span>
                          <p className="mt-2 text-lg leading-relaxed text-gray-300">{item.event}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Impact Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-4xl font-bold mb-6 text-green-400">Impact & Legacy</h2>
              <div className="space-y-6">
                <p className="text-xl leading-relaxed">{event.outcome}</p>
                <p className="text-xl leading-relaxed text-gray-300">
                  The ripple effects of this hack extended far beyond its immediate impact, influencing 
                  future generations and shaping the course of history. Its success demonstrated the power 
                  of innovation and determination in overcoming seemingly impossible challenges.
                </p>
                <p className="text-xl leading-relaxed text-gray-300">
                  Today, we can see the lasting influence of this hack in modern systems and approaches. 
                  The lessons learned continue to inspire new generations of innovators and problem-solvers, 
                  proving that even the most complex systems can be improved through creative thinking and 
                  collaborative effort.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Team and Quiz */}
          <div className="space-y-12">
            {/* Team Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-4xl font-bold mb-6 text-green-400">Hack Team</h2>
              <div className="space-y-6">
                <p className="text-xl leading-relaxed">{event.team}</p>
                <div className="flex items-center space-x-4 mt-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Key Contributors</h3>
                    <p className="text-gray-400">The brilliant minds behind this historical hack</p>
                  </div>
                </div>
                <p className="text-lg text-gray-300 mt-4">
                  Each team member brought unique skills and perspectives to the project, creating a 
                  perfect synergy that made this hack possible. Their collaboration and dedication 
                  set new standards for what could be achieved through teamwork and innovation.
                </p>
              </div>
            </div>

            {/* Quiz Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-4xl font-bold mb-6 text-green-400">Test Your Knowledge</h2>
              <p className="text-xl mb-8">{event.quiz.question}</p>
              <div className="space-y-4">
                {event.quiz.options.map((option, index) => (
                  <label
                    key={index}
                    className={`block p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                      selectedAnswer === index
                        ? 'bg-green-500/20 border-2 border-green-500 transform scale-105'
                        : 'bg-gray-700/50 hover:bg-gray-700 border border-gray-600'
                    }`}
                  >
                    <input
                      type="radio"
                      name="answer"
                      value={index}
                      checked={selectedAnswer === index}
                      onChange={() => setSelectedAnswer(index)}
                      className="hidden"
                    />
                    <div className="flex items-center">
                      <span className={`w-6 h-6 flex items-center justify-center rounded-full border-2 mr-4 transition-colors duration-200 ${
                        selectedAnswer === index ? 'border-green-500' : 'border-gray-400'
                      }`}>
                        {selectedAnswer === index && (
                          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        )}
                      </span>
                      <span className="text-lg">{option}</span>
                    </div>
                  </label>
                ))}
              </div>
              {!showResult && (
                <button
                  onClick={handleQuizSubmit}
                  disabled={selectedAnswer === null}
                  className={`mt-8 w-full px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    selectedAnswer === null
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-green-500 hover:bg-green-600 transform hover:scale-105'
                  }`}
                >
                  Submit Answer
                </button>
              )}
              {showResult && (
                <div className={`mt-8 p-6 rounded-xl ${
                  selectedAnswer === event.quiz.correctAnswer
                    ? 'bg-green-500/20 border-2 border-green-500'
                    : 'bg-red-500/20 border-2 border-red-500'
                }`}>
                  <p className="text-xl font-bold text-center">
                    {selectedAnswer === event.quiz.correctAnswer
                      ? '🎉 Correct! Well done!'
                      : `❌ Incorrect. The correct answer is: ${event.quiz.options[event.quiz.correctAnswer]}`}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage; 