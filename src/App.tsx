import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EventPage from './pages/EventPage';
import About from './pages/About';
import NotFound from './pages/NotFound';
import AllHacks from './pages/AllHacks';
import QuizCenter from './pages/QuizCenter';
import SubmitHack from './pages/SubmitHack';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hacks" element={<AllHacks />} />
            <Route path="/event/:id" element={<EventPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/quiz" element={<QuizCenter />} />
            <Route path="/submit" element={<SubmitHack />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
