import React, { useState } from 'react';
import { MapPin, Search, Filter, Star, Users, Calendar, ExternalLink } from 'lucide-react';

const CollegeDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [selectedStream, setSelectedStream] = useState('all');

  const colleges = [
    {
      id: 1,
      name: "Delhi University",
      location: "New Delhi, Delhi",
      state: "delhi",
      type: "Central University",
      rating: 4.5,
      students: 12000,
      established: 1922,
      streams: ["arts", "science", "commerce"],
      courses: ["B.A", "B.Sc", "B.Com", "BBA", "B.Tech"],
      cutoff: "85%",
      fees: "₹15,000/year",
      image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "Jawaharlal Nehru University",
      location: "New Delhi, Delhi",
      state: "delhi",
      type: "Central University",
      rating: 4.3,
      students: 8500,
      established: 1969,
      streams: ["arts", "science"],
      courses: ["B.A", "B.Sc", "MA", "MSc", "PhD"],
      cutoff: "80%",
      fees: "₹12,000/year",
      image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "Banaras Hindu University",
      location: "Varanasi, Uttar Pradesh",
      state: "uttar pradesh",
      type: "Central University",
      rating: 4.2,
      students: 15000,
      established: 1916,
      streams: ["arts", "science", "commerce"],
      courses: ["B.A", "B.Sc", "B.Com", "B.Tech", "MBBS"],
      cutoff: "75%",
      fees: "₹18,000/year",
      image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      name: "University of Calcutta",
      location: "Kolkata, West Bengal",
      state: "west bengal",
      type: "State University",
      rating: 4.0,
      students: 10000,
      established: 1857,
      streams: ["arts", "science", "commerce"],
      courses: ["B.A", "B.Sc", "B.Com", "BBA"],
      cutoff: "70%",
      fees: "₹10,000/year",
      image: "https://images.pexels.com/photos/1596842/pexels-photo-1596842.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      name: "University of Mumbai",
      location: "Mumbai, Maharashtra",
      state: "maharashtra",
      type: "State University",
      rating: 4.1,
      students: 20000,
      established: 1857,
      streams: ["arts", "science", "commerce"],
      courses: ["B.A", "B.Sc", "B.Com", "BMS", "B.Tech"],
      cutoff: "78%",
      fees: "₹14,000/year",
      image: "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      name: "Bangalore University",
      location: "Bangalore, Karnataka",
      state: "karnataka",
      type: "State University",
      rating: 3.9,
      students: 14000,
      established: 1964,
      streams: ["arts", "science", "commerce"],
      courses: ["B.A", "B.Sc", "B.Com", "BCA", "BBM"],
      cutoff: "72%",
      fees: "₹16,000/year",
      image: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const states = [
    { value: 'all', label: 'All States' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'uttar pradesh', label: 'Uttar Pradesh' },
    { value: 'west bengal', label: 'West Bengal' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'karnataka', label: 'Karnataka' }
  ];

  const streams = [
    { value: 'all', label: 'All Streams' },
    { value: 'arts', label: 'Arts' },
    { value: 'science', label: 'Science' },
    { value: 'commerce', label: 'Commerce' }
  ];

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === 'all' || college.state === selectedState;
    const matchesStream = selectedStream === 'all' || college.streams.includes(selectedStream);
    
    return matchesSearch && matchesState && matchesStream;
  });

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Government College Directory</h1>
          <p className="text-gray-600">
            Discover government colleges near you with detailed information about courses, fees, and admission requirements.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search colleges or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {states.map(state => (
                <option key={state.value} value={state.value}>{state.label}</option>
              ))}
            </select>
            <select
              value={selectedStream}
              onChange={(e) => setSelectedStream(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {streams.map(stream => (
                <option key={stream.value} value={stream.value}>{stream.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredColleges.length} college{filteredColleges.length !== 1 ? 's' : ''} 
            {selectedState !== 'all' && ` in ${states.find(s => s.value === selectedState)?.label}`}
            {selectedStream !== 'all' && ` for ${streams.find(s => s.value === selectedStream)?.label}`}
          </p>
        </div>

        {/* College Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredColleges.map(college => (
            <div key={college.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
              <div className="relative">
                <img 
                  src={college.image} 
                  alt={college.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium">
                  {college.type}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 flex-1">
                    {college.name}
                  </h3>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{college.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{college.location}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{college.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Est. {college.established}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">Available Courses:</div>
                  <div className="flex flex-wrap gap-1">
                    {college.courses.slice(0, 3).map(course => (
                      <span key={course} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                        {course}
                      </span>
                    ))}
                    {college.courses.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{college.courses.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-600">Cut-off:</span>
                    <div className="font-semibold text-green-600">{college.cutoff}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Fees:</span>
                    <div className="font-semibold text-blue-600">{college.fees}</div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <span>View Details</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <Filter className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg">No colleges found matching your criteria</p>
              <p className="text-sm">Try adjusting your filters or search terms</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegeDirectory;