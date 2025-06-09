import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import events from '../data/events.json';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  eventTitle: string;
}

const QuizCenter: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    const allQuestions: QuizQuestion[] = events.events.map(event => ({
      id: event.id,
      question: event.quiz.question,
      options: event.quiz.options,
      correctAnswer: event.quiz.correctAnswer,
      eventTitle: event.title
    }));

    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 5));
  }, []);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setShowExplanation(false);
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (showResult) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Quiz Complete!</h1>
          <p className="text-2xl mb-8">
            Your score: {score} out of {questions.length}
          </p>
          <div className="space-y-4">
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors"
            >
              Try Again
            </button>
            <Link
              to="/"
              className="block px-6 py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-600 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Quiz Center</h1>
          <p className="text-gray-300">
            Test your knowledge of historical hacks! Question {currentQuestion + 1} of{' '}
            {questions.length}
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">{currentQ.question}</h2>
          <p className="text-sm text-gray-400 mb-6">
            From: {currentQ.eventTitle}
          </p>
          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showExplanation}
                className={`w-full p-4 text-left rounded-lg transition-colors ${
                  selectedAnswer === index
                    ? index === currentQ.correctAnswer
                      ? 'bg-green-500 bg-opacity-20 border border-green-500'
                      : 'bg-red-500 bg-opacity-20 border border-red-500'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {showExplanation && (
          <div className="text-center">
            <button
              onClick={handleNextQuestion}
              className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors"
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizCenter; 