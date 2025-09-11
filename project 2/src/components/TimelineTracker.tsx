import React, { useState } from 'react';
import { Calendar, Bell, Clock, BookOpen, AlertCircle, CheckCircle, Star } from 'lucide-react';

const TimelineTracker: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const timelineData = [
    {
      month: 0, // January
      events: [
        {
          title: "CBSE Board Exam Registration",
          description: "Last date for Class 12 board exam registration",
          date: "15th January",
          type: "exam",
          priority: "high",
          status: "upcoming"
        },
        {
          title: "JEE Main Session 1 Registration",
          description: "Registration opens for JEE Main first session",
          date: "20th January",
          type: "registration",
          priority: "high",
          status: "upcoming"
        }
      ]
    },
    {
      month: 1, // February
      events: [
        {
          title: "Class 12 Board Exams Begin",
          description: "CBSE Class 12 board examinations commence",
          date: "15th February",
          type: "exam",
          priority: "critical",
          status: "upcoming"
        },
        {
          title: "NEET Registration Opens",
          description: "National Eligibility cum Entrance Test registration",
          date: "25th February",
          type: "registration",
          priority: "high",
          status: "upcoming"
        }
      ]
    },
    {
      month: 2, // March
      events: [
        {
          title: "JEE Main Session 1 Exam",
          description: "Joint Entrance Examination Main first session",
          date: "5th March",
          type: "exam",
          priority: "critical",
          status: "upcoming"
        },
        {
          title: "Delhi University Admission Registration",
          description: "DU undergraduate admission registration opens",
          date: "20th March",
          type: "admission",
          priority: "high",
          status: "upcoming"
        }
      ]
    },
    {
      month: 3, // April
      events: [
        {
          title: "JEE Main Session 2 Registration",
          description: "Registration for JEE Main second session",
          date: "1st April",
          type: "registration",
          priority: "high",
          status: "upcoming"
        },
        {
          title: "NEET Exam",
          description: "National Eligibility cum Entrance Test examination",
          date: "15th April",
          type: "exam",
          priority: "critical",
          status: "upcoming"
        }
      ]
    },
    {
      month: 4, // May
      events: [
        {
          title: "JEE Main Session 2 Exam",
          description: "Joint Entrance Examination Main second session",
          date: "10th May",
          type: "exam",
          priority: "critical",
          status: "upcoming"
        },
        {
          title: "CBSE Results Declaration",
          description: "Class 12 board examination results announced",
          date: "25th May",
          type: "result",
          priority: "critical",
          status: "upcoming"
        }
      ]
    },
    {
      month: 5, // June
      events: [
        {
          title: "JEE Advanced Registration",
          description: "Registration for JEE Advanced examination",
          date: "5th June",
          type: "registration",
          priority: "high",
          status: "upcoming"
        },
        {
          title: "College Admission Process Begins",
          description: "Most colleges start their admission process",
          date: "15th June",
          type: "admission",
          priority: "high",
          status: "upcoming"
        }
      ]
    },
    {
      month: 6, // July
      events: [
        {
          title: "JEE Advanced Exam",
          description: "Joint Entrance Examination Advanced",
          date: "8th July",
          type: "exam",
          priority: "critical",
          status: "upcoming"
        },
        {
          title: "DU First Cut-off List",
          description: "Delhi University releases first cut-off list",
          date: "20th July",
          type: "cutoff",
          priority: "high",
          status: "upcoming"
        }
      ]
    },
    {
      month: 7, // August
      events: [
        {
          title: "College Admissions Peak",
          description: "Most college admissions and counseling sessions",
          date: "Throughout August",
          type: "admission",
          priority: "high",
          status: "upcoming"
        },
        {
          title: "Scholarship Applications",
          description: "Various scholarship application deadlines",
          date: "31st August",
          type: "scholarship",
          priority: "medium",
          status: "upcoming"
        }
      ]
    },
    {
      month: 8, // September
      events: [
        {
          title: "Academic Session Begins",
          description: "New academic year starts for most colleges",
          date: "1st September",
          type: "academic",
          priority: "medium",
          status: "upcoming"
        }
      ]
    }
  ];

  const currentMonthEvents = timelineData.find(data => data.month === selectedMonth)?.events || [];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'exam': return <BookOpen className="h-5 w-5" />;
      case 'registration': return <Bell className="h-5 w-5" />;
      case 'admission': return <Star className="h-5 w-5" />;
      case 'result': return <CheckCircle className="h-5 w-5" />;
      case 'scholarship': return <Star className="h-5 w-5" />;
      default: return <Calendar className="h-5 w-5" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityBg = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-50 border-red-200';
      case 'high': return 'bg-orange-50 border-orange-200';
      case 'medium': return 'bg-blue-50 border-blue-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-800';
      case 'high': return 'text-orange-800';
      case 'medium': return 'text-blue-800';
      default: return 'text-gray-800';
    }
  };

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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Academic Timeline Tracker</h1>
          <p className="text-gray-600">
            Stay updated with important dates for exams, admissions, and scholarships throughout the academic year
          </p>
        </div>

        {/* Month Selector */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Month</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {months.map((month, index) => (
              <button
                key={index}
                onClick={() => setSelectedMonth(index)}
                className={`p-3 rounded-lg border text-sm font-medium transition-all duration-200 ${
                  selectedMonth === index
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                {month}
              </button>
            ))}
          </div>
        </div>

        {/* Current Month Overview */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-2">{months[selectedMonth]} Timeline</h2>
          <p className="text-blue-100">
            {currentMonthEvents.length} important event{currentMonthEvents.length !== 1 ? 's' : ''} scheduled for this month
          </p>
        </div>

        {/* Events List */}
        {currentMonthEvents.length > 0 ? (
          <div className="space-y-6">
            {currentMonthEvents.map((event, index) => (
              <div
                key={index}
                className={`rounded-xl border-2 p-6 transition-all duration-200 hover:shadow-md ${getPriorityBg(event.priority)}`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full text-white ${getPriorityColor(event.priority)}`}>
                    {getEventIcon(event.type)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className={`text-xl font-bold ${getPriorityText(event.priority)}`}>
                        {event.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getPriorityBg(event.priority)} ${getPriorityText(event.priority)}`}>
                          {event.priority} Priority
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-sm">{event.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className={`mb-4 ${getPriorityText(event.priority)} opacity-80`}>
                      {event.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className={`text-sm font-medium capitalize px-3 py-1 rounded ${getPriorityBg(event.priority)} ${getPriorityText(event.priority)}`}>
                          {event.type.replace('_', ' ')}
                        </span>
                        <span className="text-sm text-gray-600 capitalize">
                          Status: {event.status}
                        </span>
                      </div>
                      
                      <button className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                        event.priority === 'critical' 
                          ? 'bg-red-600 text-white hover:bg-red-700' 
                          : event.priority === 'high'
                          ? 'bg-orange-600 text-white hover:bg-orange-700'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}>
                        Set Reminder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Events Scheduled
            </h3>
            <p className="text-gray-600">
              No important events are scheduled for {months[selectedMonth]}. Check other months for upcoming deadlines.
            </p>
          </div>
        )}

        {/* Reminder Settings */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Notification Preferences</h3>
              <p className="text-gray-600">
                Get timely reminders about important deadlines and events
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Bell className="h-4 w-4" />
                <span>Enable Notifications</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <div>
                <div className="font-medium text-red-800">Critical Events</div>
                <div className="text-sm text-red-600">1 day before</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg">
              <AlertCircle className="h-5 w-5 text-orange-500" />
              <div>
                <div className="font-medium text-orange-800">High Priority</div>
                <div className="text-sm text-orange-600">3 days before</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
              <AlertCircle className="h-5 w-5 text-blue-500" />
              <div>
                <div className="font-medium text-blue-800">Medium Priority</div>
                <div className="text-sm text-blue-600">1 week before</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineTracker;