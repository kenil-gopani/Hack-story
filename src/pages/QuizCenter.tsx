import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import events from '../data/events.json';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  eventTitle: string;
  explanation?: string;
}

const QuizCenter: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const allQuestions: QuizQuestion[] = [
      ...events.events.map(event => ({
        id: event.id,
        question: event.quiz.question,
        options: event.quiz.options,
        correctAnswer: event.quiz.correctAnswer,
        eventTitle: event.title,
        explanation: `This question is about ${event.title}, where ${event.description}`
      })),
      {
        id: 11,
        question: "What was the first message sent over ARPANET?",
        options: ["LOGIN", "HELLO", "TEST", "START"],
        correctAnswer: 0,
        eventTitle: "Internet Creation",
        explanation: "The first message sent over ARPANET was 'LOGIN', though it crashed after sending 'LO'"
      },
      {
        id: 12,
        question: "Who developed the first practical electrical power system?",
        options: ["Thomas Edison", "Nikola Tesla", "George Westinghouse", "Michael Faraday"],
        correctAnswer: 0,
        eventTitle: "Electricity Revolution",
        explanation: "Thomas Edison developed the first practical electrical power system in 1882"
      },
      {
        id: 13,
        question: "What was the main tool used to bring down the Berlin Wall?",
        options: ["Sledgehammers and chisels", "Explosives", "Bulldozers", "Cranes"],
        correctAnswer: 0,
        eventTitle: "Berlin Wall Falls",
        explanation: "Citizens used sledgehammers and chisels to break down the wall piece by piece"
      }
    ];

    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10));
  }, []);

  useEffect(() => {
    if (!showExplanation && !showResult) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleNextQuestion();
            return 30;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentQuestion, showExplanation, showResult]);

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
      setTimeLeft(30);
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
    setTimeLeft(30);
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    let message = "";
    if (percentage >= 90) {
      message = "Outstanding! You're a history hacking master!";
    } else if (percentage >= 70) {
      message = "Great job! You know your historical hacks!";
    } else if (percentage >= 50) {
      message = "Good effort! Keep learning about these epic hacks!";
    } else {
      message = "Keep exploring! There's more to learn about these historical hacks!";
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Quiz Complete!</h1>
          <p className="text-2xl mb-4">
            Your score: {score} out of {questions.length}
          </p>
          <p className="text-xl text-green-400 mb-8">{message}</p>
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
          <div className="flex justify-between items-center">
            <p className="text-gray-300">
              Question {currentQuestion + 1} of {questions.length}
            </p>
            <p className="text-gray-300">
              Time left: <span className={timeLeft <= 10 ? "text-red-500" : "text-green-500"}>{timeLeft}s</span>
            </p>
          </div>
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
          <div className="text-center space-y-4">
            <p className="text-gray-300 mb-4">
              {currentQ.explanation}
            </p>
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
