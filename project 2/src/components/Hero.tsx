import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, BookOpen, TrendingUp, MapPin, Play, Sparkles, Star, Quote } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Users,
      title: 'Personalized Guidance',
      description: 'Get course recommendations based on your interests and aptitude',
      color: 'blue'
    },
    {
      icon: BookOpen,
      title: 'College Directory',
      description: 'Discover nearby government colleges with detailed information',
      color: 'green'
    },
    {
      icon: TrendingUp,
      title: 'Career Mapping',
      description: 'Visualize career paths and opportunities for each course',
      color: 'purple'
    },
    {
      icon: MapPin,
      title: 'Local Focus',
      description: 'Location-based recommendations for colleges and opportunities',
      color: 'orange'
    }
  ];

  const educationalQuotes = [
    { quote: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
    { quote: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" },
    { quote: "Education is not preparation for life; education is life itself.", author: "John Dewey" },
    { quote: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.", author: "Dr. Seuss" },
    { quote: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
    { quote: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.", author: "Malcolm X" },
    { quote: "The roots of education are bitter, but the fruit is sweet.", author: "Aristotle" },
    { quote: "Education is what remains after one has forgotten what one has learned in school.", author: "Albert Einstein" },
    { quote: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
    { quote: "The expert in anything was once a beginner.", author: "Helen Hayes" },
    { quote: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.", author: "Pelé" },
    { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { quote: "Your education is a dress rehearsal for a life that is yours to lead.", author: "Nora Ephron" },
    { quote: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.", author: "Brian Herbert" },
    { quote: "Don't let what you cannot do interfere with what you can do.", author: "John Wooden" }
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev: number) => (prev + 1) % educationalQuotes.length);
    }, 5000);
    
    return () => {
      clearInterval(quoteInterval);
    };
  }, [educationalQuotes.length]);

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating sparkles */}
        <Sparkles className={`absolute top-20 left-10 h-6 w-6 text-blue-400 animate-bounce transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} />
        <Sparkles className={`absolute top-40 right-20 h-4 w-4 text-purple-400 animate-pulse transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} />
        <Sparkles className={`absolute bottom-40 left-20 h-5 w-5 text-orange-400 animate-ping transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} />
        
        {/* Moving gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-bounce blur-xl"></div>
        <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full animate-ping blur-xl"></div>
        
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
        
        {/* Floating particles */}
        <div className="absolute top-10 right-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-70"></div>
        <div className="absolute top-32 left-32 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-20 right-32 w-3 h-3 bg-indigo-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-32 left-10 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-60"></div>
        
        {/* Moving lines */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-200/30 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-200/30 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
        <div className="text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Career Journey
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
                Starts Here
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Navigate your educational path with confidence. Get personalized course recommendations, 
              discover government colleges, and map out your future career with our comprehensive guidance platform.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button
              onClick={() => onNavigate('quiz')}
              className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <Play className="h-5 w-5 group-hover:animate-pulse" />
              <span>Take Career Quiz</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('colleges')}
              className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 border-2 border-blue-600 hover:border-blue-700 flex items-center justify-center space-x-2 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <BookOpen className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              <span>Explore Colleges</span>
            </button>
          </div>
        </div>

      </div>

      {/* Educational Quotes Section */}
      <div className="bg-white/90 backdrop-blur-sm py-16 border-y border-white/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-blue-100">
              <Quote className="h-12 w-12 text-blue-500 mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl font-medium text-gray-800 italic leading-relaxed mb-6">
                "{educationalQuotes[currentQuote].quote}"
              </blockquote>
              <div className="text-right">
                <cite className="text-lg font-semibold text-blue-600">
                  — {educationalQuotes[currentQuote].author}
                </cite>
              </div>
              <div className="flex justify-center mt-6 space-x-2">
                {educationalQuotes.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      index === currentQuote ? 'bg-blue-500 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Features Section */}
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center text-gray-900 mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Everything You Need for Your Career Journey
          </h2>
          <p className={`text-gray-600 text-center mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Discover our comprehensive suite of tools designed to guide you through every step of your educational and career journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const colors = getColorClasses(feature.color);
              const isHovered = hoveredFeature === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className={`bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center cursor-pointer transform hover:scale-105 hover:-translate-y-2 border-2 ${isHovered ? colors.border : 'border-transparent'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`${colors.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${isHovered ? 'scale-110 rotate-12' : ''}`}>
                    <feature.icon className={`h-8 w-8 ${colors.text} transition-all duration-300 ${isHovered ? 'scale-110' : ''}`} />
                  </div>
                  <h3 className={`text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 ${isHovered ? colors.text : ''}`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  {isHovered && (
                    <div className="mt-4">
                      <Star className={`h-5 w-5 ${colors.text} mx-auto animate-pulse`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Shape Your Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have found their perfect career path through our personalized guidance system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('quiz')}
              className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <Sparkles className="h-5 w-5 group-hover:animate-spin" />
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('dashboard')}
              className="group bg-transparent text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <TrendingUp className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              <span>View Dashboard</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;