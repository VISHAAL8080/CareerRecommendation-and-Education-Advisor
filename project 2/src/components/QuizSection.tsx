import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, Clock, Brain, Target, Lightbulb, Award, Sparkles } from 'lucide-react';

interface QuizSectionProps {
  onComplete: (profile: any) => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    setSelectedOption(answers[currentQuestion] || null);
  }, [currentQuestion, answers]);

  const questions = [
    {
      id: 0,
      question: "What type of activities do you enjoy most?",
      options: [
        { value: "science", label: "Conducting experiments and research" },
        { value: "arts", label: "Creative writing, painting, or music" },
        { value: "commerce", label: "Managing finances and business planning" },
        { value: "technical", label: "Building things and working with technology" }
      ]
    },
    {
      id: 1,
      question: "Which subject did you perform best in during Class 10?",
      options: [
        { value: "mathematics", label: "Mathematics" },
        { value: "science", label: "Science (Physics, Chemistry, Biology)" },
        { value: "english", label: "English and Languages" },
        { value: "socialscience", label: "Social Science and History" }
      ]
    },
    {
      id: 2,
      question: "What kind of work environment appeals to you?",
      options: [
        { value: "lab", label: "Laboratory or research facility" },
        { value: "office", label: "Corporate office environment" },
        { value: "creative", label: "Creative studio or artistic space" },
        { value: "field", label: "Fieldwork and outdoor activities" }
      ]
    },
    {
      id: 3,
      question: "Which career outcome interests you most?",
      options: [
        { value: "research", label: "Contributing to scientific research" },
        { value: "business", label: "Starting your own business" },
        { value: "teaching", label: "Educating and inspiring others" },
        { value: "public", label: "Serving in government or public sector" }
      ]
    },
    {
      id: 4,
      question: "How do you prefer to solve problems?",
      options: [
        { value: "analytical", label: "Through data analysis and logical reasoning" },
        { value: "creative", label: "Through innovative and creative approaches" },
        { value: "practical", label: "Through hands-on practical solutions" },
        { value: "collaborative", label: "Through teamwork and discussion" }
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: value }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      generateResults();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const generateResults = () => {
    const profile = {
      answers,
      recommendations: getRecommendations(answers),
      completedAt: new Date().toISOString(),
      needsDetailedProfile: true
    };
    setShowResults(true);
    onComplete(profile);
  };

  const getRecommendations = (answers: Record<number, string>) => {
    const scores = { science: 0, commerce: 0, arts: 0 };
    
    Object.values(answers).forEach(answer => {
      if (['science', 'mathematics', 'lab', 'research', 'analytical'].includes(answer)) {
        scores.science++;
      } else if (['commerce', 'office', 'business', 'practical'].includes(answer)) {
        scores.commerce++;
      } else if (['arts', 'english', 'creative', 'teaching', 'collaborative'].includes(answer)) {
        scores.arts++;
      }
    });

    const topStream = Object.entries(scores).sort(([,a], [,b]) => b - a)[0][0];
    
    return {
      primaryStream: topStream,
      scores,
      courses: getCoursesForStream(topStream),
      careers: getCareersForStream(topStream)
    };
  };

  const getCoursesForStream = (stream: string) => {
    const courseMap = {
      science: ['B.Sc Physics', 'B.Sc Chemistry', 'B.Sc Biology', 'B.Tech', 'Medical'],
      commerce: ['B.Com', 'BBA', 'B.Com (Hons)', 'CA Foundation', 'Economics'],
      arts: ['B.A English', 'B.A History', 'B.A Psychology', 'Mass Communication', 'Fine Arts']
    };
    return courseMap[stream as keyof typeof courseMap] || [];
  };

  const getCareersForStream = (stream: string) => {
    const careerMap = {
      science: ['Research Scientist', 'Engineer', 'Doctor', 'Data Analyst', 'Lab Technician'],
      commerce: ['Business Analyst', 'Accountant', 'Financial Advisor', 'Entrepreneur', 'Banking'],
      arts: ['Teacher', 'Writer', 'Journalist', 'Social Worker', 'Designer']
    };
    return careerMap[stream as keyof typeof careerMap] || [];
  };

  if (showResults) {
    const recommendations = getRecommendations(answers);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 animated-bg">
        <div className="floating-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Career Assessment Results</h2>
              <p className="text-gray-600">Based on your responses, here are your personalized recommendations</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Recommended Stream</h3>
                  <div className="text-2xl font-bold text-blue-600 capitalize mb-2">
                    {recommendations.primaryStream}
                  </div>
                  <p className="text-blue-700">
                    This stream aligns best with your interests and aptitude
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-900 mb-3">Suggested Courses</h3>
                  <ul className="space-y-2">
                    {recommendations.courses.map((course, index) => (
                      <li key={index} className="flex items-center text-green-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-900 mb-3">Career Opportunities</h3>
                  <ul className="space-y-2">
                    {recommendations.careers.map((career, index) => (
                      <li key={index} className="flex items-center text-orange-700">
                        <ChevronRight className="h-4 w-4 text-orange-500 mr-2" />
                        {career}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-900 mb-3">Your Strengths</h3>
                  <div className="space-y-3">
                    {Object.entries(recommendations.scores).map(([stream, score]) => (
                      <div key={stream}>
                        <div className="flex justify-between text-sm text-purple-700 mb-1">
                          <span className="capitalize">{stream}</span>
                          <span>{score}/5</span>
                        </div>
                        <div className="w-full bg-purple-200 rounded-full h-2">
                          <div 
                            className="bg-purple-600 h-2 rounded-full"
                            style={{ width: `${(score / 5) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Ready to explore colleges and career paths based on your results?
              </p>
              <button
                onClick={() => onComplete(recommendations)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Explore Recommendations
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 animated-bg">
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Career Assessment Quiz</h2>
              <span className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              {questions[currentQuestion].question}
            </h3>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    answers[currentQuestion] === option.value
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="flex items-center px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </button>
            <button
              onClick={nextQuestion}
              disabled={!answers[currentQuestion]}
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next'}
              <ChevronRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSection;