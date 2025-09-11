import React from 'react';
import { User, BookOpen, TrendingUp, Star, Bell, Calendar, MapPin, Award } from 'lucide-react';

interface DashboardProps {
  userProfile: any;
}

const Dashboard: React.FC<DashboardProps> = ({ userProfile }) => {
  // Mock user data if no profile exists
  const defaultProfile = {
    name: "Student",
    completedAt: new Date().toISOString(),
    recommendations: {
      primaryStream: "science",
      courses: ["B.Sc Physics", "B.Tech", "B.Sc Chemistry"],
      careers: ["Software Engineer", "Data Scientist", "Research Scientist"],
      scores: { science: 4, commerce: 2, arts: 1 }
    }
  };

  // Ensure profile has proper structure with recommendations object
  const profile = userProfile ? {
    ...userProfile,
    recommendations: userProfile.recommendations || defaultProfile.recommendations
  } : defaultProfile;

  const recentActivity = [
    {
      id: 1,
      type: "quiz",
      title: "Completed Career Assessment",
      description: "Got personalized recommendations for Science stream",
      timestamp: "2 hours ago",
      icon: BookOpen
    },
    {
      id: 2,
      type: "college",
      title: "Viewed Delhi University",
      description: "Checked admission requirements for B.Sc Physics",
      timestamp: "1 day ago",
      icon: MapPin
    },
    {
      id: 3,
      type: "timeline",
      title: "Set Reminder",
      description: "JEE Main registration deadline - March 5th",
      timestamp: "2 days ago",
      icon: Bell
    }
  ];

  const upcomingEvents = [
    {
      title: "JEE Main Registration",
      date: "March 5, 2024",
      priority: "high",
      type: "Registration"
    },
    {
      title: "NEET Application",
      date: "March 15, 2024",
      priority: "medium",
      type: "Application"
    },
    {
      title: "Board Exam Results",
      date: "May 25, 2024",
      priority: "critical",
      type: "Result"
    }
  ];

  const savedColleges = [
    {
      name: "Delhi University",
      course: "B.Sc Physics",
      cutoff: "85%",
      fees: "₹15,000/year"
    },
    {
      name: "JNU",
      course: "B.Sc Mathematics",
      cutoff: "80%",
      fees: "₹12,000/year"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 animated-bg">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {profile.name}!</h1>
          <p className="text-gray-600">Here's your personalized career guidance dashboard</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Summary */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <User className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Profile Summary</h2>
                  <p className="text-gray-600">Your career assessment results and preferences</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Recommended Stream</h3>
                  <p className="text-2xl font-bold text-blue-600 capitalize mb-2">
                    {profile.recommendations.primaryStream || profile.primaryStream}
                  </p>
                  <p className="text-blue-700 text-sm">Best match for your interests</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Assessment Score</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <span className="text-2xl font-bold text-green-600">
                      {Math.max(...Object.values(profile.recommendations.scores))}/5
                    </span>
                  </div>
                  <p className="text-green-700 text-sm">Strong compatibility</p>
                </div>
              </div>
            </div>

            {/* Recommended Courses */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="h-6 w-6 text-green-600" />
                <h2 className="text-xl font-bold text-gray-900">Recommended Courses</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {profile.recommendations.courses.map((course: string, index: number) => (
                  <div key={index} className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-1">{course}</h3>
                    <p className="text-sm text-green-700">High compatibility</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="h-6 w-6 text-purple-600" />
                <h2 className="text-xl font-bold text-gray-900">Career Opportunities</h2>
              </div>
              <div className="space-y-3">
                {profile.recommendations.careers.map((career: string, index: number) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-purple-900">{career}</h3>
                      <p className="text-sm text-purple-700">Recommended based on your profile</p>
                    </div>
                    <button className="text-purple-600 hover:text-purple-700 font-medium">
                      Explore →
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map(activity => (
                  <div key={activity.id} className="flex items-start space-x-4">
                    <div className="bg-gray-100 p-2 rounded-full">
                      <activity.icon className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{activity.title}</h3>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-5 w-5 text-orange-600" />
                <h3 className="font-bold text-gray-900">Upcoming Events</h3>
              </div>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-gray-900 text-sm">{event.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded ${
                        event.priority === 'critical' ? 'bg-red-100 text-red-700' :
                        event.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {event.priority}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">{event.date}</p>
                    <p className="text-xs text-gray-500">{event.type}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Saved Colleges */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="h-5 w-5 text-blue-600" />
                <h3 className="font-bold text-gray-900">Saved Colleges</h3>
              </div>
              <div className="space-y-3">
                {savedColleges.map((college, index) => (
                  <div key={index} className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 text-sm">{college.name}</h4>
                    <p className="text-xs text-blue-700 mb-1">{college.course}</p>
                    <div className="flex justify-between text-xs text-blue-600">
                      <span>Cutoff: {college.cutoff}</span>
                      <span>{college.fees}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-white bg-opacity-20 p-3 rounded-lg text-left hover:bg-opacity-30 transition-colors">
                  <div className="font-medium">Retake Quiz</div>
                  <div className="text-xs opacity-80">Update your preferences</div>
                </button>
                <button className="w-full bg-white bg-opacity-20 p-3 rounded-lg text-left hover:bg-opacity-30 transition-colors">
                  <div className="font-medium">Find Colleges</div>
                  <div className="text-xs opacity-80">Explore more options</div>
                </button>
                <button className="w-full bg-white bg-opacity-20 p-3 rounded-lg text-left hover:bg-opacity-30 transition-colors">
                  <div className="font-medium">Set Reminders</div>
                  <div className="text-xs opacity-80">Never miss deadlines</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;