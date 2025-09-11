import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuizSection from './components/QuizSection';
import CollegeDirectory from './components/CollegeDirectory';
import CareerPaths from './components/CareerPaths';
import TimelineTracker from './components/TimelineTracker';
import Dashboard from './components/Dashboard';
import StudentProfileForm from './components/StudentProfileForm';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [userProfile, setUserProfile] = useState(null);

  // Load user profile from localStorage on app start
  useEffect(() => {
    const savedProfile = localStorage.getItem('careerGuideProfile');
    if (savedProfile) {
      try {
        setUserProfile(JSON.parse(savedProfile));
      } catch (error) {
        console.error('Error loading saved profile:', error);
      }
    }
  }, []);

  // Save user profile to localStorage whenever it changes
  useEffect(() => {
    if (userProfile) {
      localStorage.setItem('careerGuideProfile', JSON.stringify(userProfile));
    }
  }, [userProfile]);

  const handleQuizComplete = (quizProfile: any) => {
    if (quizProfile.needsDetailedProfile) {
      setUserProfile(quizProfile);
      setCurrentSection('profile');
    } else {
      setUserProfile(quizProfile);
      setCurrentSection('dashboard');
    }
  };

  const handleProfileComplete = (detailedProfile: any) => {
    const combinedProfile = {
      ...(userProfile || {}),
      ...detailedProfile,
      needsDetailedProfile: false
    };
    setUserProfile(combinedProfile);
    setCurrentSection('dashboard');
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'quiz':
        return <QuizSection onComplete={handleQuizComplete} />;
      case 'profile':
        return <StudentProfileForm 
          onComplete={handleProfileComplete} 
          onBack={() => setCurrentSection('quiz')}
          userProfile={userProfile}
        />;
      case 'colleges':
        return <CollegeDirectory userProfile={userProfile} />;
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