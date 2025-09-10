import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuizSection from './components/QuizSection';
import CollegeDirectory from './components/CollegeDirectory';
import CareerPaths from './components/CareerPaths';
import TimelineTracker from './components/TimelineTracker';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [userProfile, setUserProfile] = useState(null);

  const renderSection = () => {
    switch (currentSection) {
      case 'quiz':
        return <QuizSection onComplete={(profile) => setUserProfile(profile)} />;
      case 'colleges':
        return <CollegeDirectory />;
      case 'careers':
        return <CareerPaths />;
      case 'timeline':
        return <TimelineTracker />;
      case 'dashboard':
        return <Dashboard userProfile={userProfile} />;
      default:
        return <Hero onNavigate={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentSection={currentSection} onNavigate={setCurrentSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;