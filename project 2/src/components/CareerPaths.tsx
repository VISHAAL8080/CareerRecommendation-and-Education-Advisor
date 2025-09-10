import React, { useState } from 'react';
import { TrendingUp, DollarSign, Clock, BookOpen, Users, ChevronRight } from 'lucide-react';

const CareerPaths: React.FC = () => {
  const [selectedStream, setSelectedStream] = useState('science');

  const careerData = {
    science: {
      title: "Science Stream Careers",
      description: "Explore exciting career opportunities in science and technology",
      careers: [
        {
          title: "Software Engineer",
          description: "Design and develop software applications and systems",
          salary: "₹6-15 LPA",
          growth: "High",
          timeToJob: "3-4 years",
          education: "B.Tech/B.Sc Computer Science",
          skills: ["Programming", "Problem Solving", "Algorithms"],
          companies: ["Google", "Microsoft", "Amazon", "TCS", "Infosys"]
        },
        {
          title: "Data Scientist",
          description: "Analyze complex data to help organizations make decisions",
          salary: "₹8-20 LPA",
          growth: "Very High",
          timeToJob: "4-5 years",
          education: "B.Sc/M.Sc Statistics, Mathematics, Computer Science",
          skills: ["Python/R", "Machine Learning", "Statistics"],
          companies: ["Netflix", "Flipkart", "Swiggy", "Ola", "PayTM"]
        },
        {
          title: "Medical Doctor",
          description: "Diagnose and treat patients in various medical specializations",
          salary: "₹10-50 LPA",
          growth: "High",
          timeToJob: "7-10 years",
          education: "MBBS + MD/MS",
          skills: ["Medical Knowledge", "Communication", "Empathy"],
          companies: ["Hospitals", "Private Practice", "Government Health"]
        },
        {
          title: "Research Scientist",
          description: "Conduct research in physics, chemistry, biology, or other sciences",
          salary: "₹5-12 LPA",
          growth: "Medium",
          timeToJob: "5-8 years",
          education: "B.Sc + M.Sc + PhD",
          skills: ["Research Methods", "Analysis", "Scientific Writing"],
          companies: ["ISRO", "DRDO", "Universities", "Private R&D"]
        }
      ]
    },
    commerce: {
      title: "Commerce Stream Careers",
      description: "Build a successful career in business, finance, and economics",
      careers: [
        {
          title: "Chartered Accountant",
          description: "Handle financial planning, auditing, and taxation for businesses",
          salary: "₹8-25 LPA",
          growth: "High",
          timeToJob: "4-5 years",
          education: "B.Com + CA",
          skills: ["Accounting", "Taxation", "Financial Analysis"],
          companies: ["Big 4 Firms", "MNCs", "Private Practice"]
        },
        {
          title: "Investment Banker",
          description: "Help companies raise capital and provide financial advisory services",
          salary: "₹12-30 LPA",
          growth: "Very High",
          timeToJob: "3-4 years",
          education: "B.Com/BBA + MBA Finance",
          skills: ["Financial Modeling", "Analysis", "Communication"],
          companies: ["Goldman Sachs", "Morgan Stanley", "HDFC", "ICICI"]
        },
        {
          title: "Business Analyst",
          description: "Analyze business processes and recommend improvements",
          salary: "₹5-15 LPA",
          growth: "High",
          timeToJob: "3-4 years",
          education: "B.Com/BBA + MBA",
          skills: ["Data Analysis", "Process Improvement", "Communication"],
          companies: ["Consulting Firms", "Tech Companies", "Startups"]
        },
        {
          title: "Entrepreneur",
          description: "Start and manage your own business venture",
          salary: "Variable",
          growth: "Very High",
          timeToJob: "Immediate",
          education: "B.Com/BBA + Business Experience",
          skills: ["Leadership", "Risk Management", "Innovation"],
          companies: ["Own Venture", "Startups", "Family Business"]
        }
      ]
    },
    arts: {
      title: "Arts Stream Careers",
      description: "Express creativity and make a difference through humanities and social sciences",
      careers: [
        {
          title: "Civil Services Officer",
          description: "Serve the nation through administrative and policy roles",
          salary: "₹7-15 LPA",
          growth: "High",
          timeToJob: "2-4 years",
          education: "Any Bachelor's Degree + UPSC",
          skills: ["General Knowledge", "Communication", "Leadership"],
          companies: ["Government Departments", "Public Sector"]
        },
        {
          title: "Journalist",
          description: "Report news and create content for various media platforms",
          salary: "₹4-12 LPA",
          growth: "Medium",
          timeToJob: "2-3 years",
          education: "B.A Journalism/Mass Communication",
          skills: ["Writing", "Research", "Communication"],
          companies: ["News Channels", "Newspapers", "Digital Media"]
        },
        {
          title: "Social Worker",
          description: "Work with communities to address social issues and improve lives",
          salary: "₹3-8 LPA",
          growth: "Medium",
          timeToJob: "2-3 years",
          education: "B.A Social Work/Sociology",
          skills: ["Empathy", "Communication", "Project Management"],
          companies: ["NGOs", "Government", "International Organizations"]
        },
        {
          title: "Content Writer",
          description: "Create engaging content for websites, blogs, and marketing materials",
          salary: "₹3-10 LPA",
          growth: "High",
          timeToJob: "1-2 years",
          education: "B.A English/Literature",
          skills: ["Writing", "SEO", "Research"],
          companies: ["Digital Agencies", "Startups", "Freelance"]
        }
      ]
    }
  };

  const streams = [
    { id: 'science', name: 'Science', icon: '🔬' },
    { id: 'commerce', name: 'Commerce', icon: '💼' },
    { id: 'arts', name: 'Arts', icon: '🎨' }
  ];

  const currentData = careerData[selectedStream as keyof typeof careerData];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Career Path Explorer</h1>
          <p className="text-gray-600">
            Discover career opportunities, salary ranges, and growth prospects across different streams
          </p>
        </div>

        {/* Stream Selector */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Your Stream</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {streams.map(stream => (
              <button
                key={stream.id}
                onClick={() => setSelectedStream(stream.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedStream === stream.id
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="text-3xl mb-2">{stream.icon}</div>
                <div className="font-semibold">{stream.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Stream Overview */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-2">{currentData.title}</h2>
          <p className="text-blue-100 text-lg">{currentData.description}</p>
        </div>

        {/* Career Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentData.careers.map((career, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{career.title}</h3>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    career.growth === 'Very High' ? 'bg-green-100 text-green-800' :
                    career.growth === 'High' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {career.growth} Growth
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{career.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-green-500 mr-2" />
                    <div>
                      <div className="text-xs text-gray-500">Salary Range</div>
                      <div className="font-semibold text-green-600">{career.salary}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-500 mr-2" />
                    <div>
                      <div className="text-xs text-gray-500">Time to Job</div>
                      <div className="font-semibold text-blue-600">{career.timeToJob}</div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <BookOpen className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Education Required</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">{career.education}</p>
                </div>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Key Skills</span>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-6">
                    {career.skills.map(skill => (
                      <span key={skill} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Users className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Top Employers</span>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-6">
                    {career.companies.slice(0, 3).map(company => (
                      <span key={company} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                        {company}
                      </span>
                    ))}
                    {career.companies.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{career.companies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <span>Explore Career Path</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 mt-12 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Career Journey?</h2>
          <p className="text-purple-100 mb-6">
            Take our career assessment quiz to get personalized recommendations based on your interests and aptitude
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Take Career Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerPaths;