import React, { useState } from 'react';
import { User, GraduationCap, Home, Building2, ChevronRight, ChevronLeft } from 'lucide-react';

interface StudentProfileFormProps {
  onComplete: (profile: any) => void;
  onBack?: () => void;
  userProfile?: any; // Add userProfile prop to get quiz results
}

const StudentProfileForm: React.FC<StudentProfileFormProps> = ({ onComplete, onBack, userProfile }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Personal Details
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Academic Details
    class10Percentage: '',
    class12Percentage: '',
    class10Board: '',
    class12Board: '',
    class12Stream: '',
    
    // Subject-specific marks based on stream
    physicsMarks: '',
    chemistryMarks: '',
    mathsMarks: '',
    biologyMarks: '',
    englishMarks: '',
    accountancyMarks: '',
    businessStudiesMarks: '',
    economicsMarks: '',
    historyMarks: '',
    geographyMarks: '',
    politicalScienceMarks: '',
    
    // Preferences
    accommodationType: '', // 'hostel' or 'dayscholar'
    preferredDistance: '', // for day scholars
    budgetRange: '',
    
    // Additional Info
    extracurriculars: [],
    specialNeeds: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const steps = [
    {
      title: "Personal Information",
      description: "Tell us about yourself",
      icon: User
    },
    {
      title: "Academic Records",
      description: "Your educational background",
      icon: GraduationCap
    },
    {
      title: "Accommodation Preference",
      description: "Hostel or Day Scholar?",
      icon: Home
    },
    {
      title: "Additional Preferences",
      description: "Budget and other details",
      icon: Building2
    }
  ];

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  const boards = ['CBSE', 'ICSE', 'State Board', 'IB', 'Other'];
  const streams = ['Science (PCM)', 'Science (PCB)', 'Commerce', 'Arts/Humanities'];

  // Get subject requirements based on recommended stream from quiz
  const getRequiredSubjects = () => {
    const recommendedStream = userProfile?.recommendations?.primaryStream;
    
    switch (recommendedStream) {
      case 'science':
        return {
          core: ['physicsMarks', 'chemistryMarks', 'mathsMarks', 'englishMarks'],
          optional: ['biologyMarks'],
          labels: {
            physicsMarks: 'Physics',
            chemistryMarks: 'Chemistry', 
            mathsMarks: 'Mathematics',
            englishMarks: 'English',
            biologyMarks: 'Biology (if applicable)'
          }
        };
      case 'commerce':
        return {
          core: ['accountancyMarks', 'businessStudiesMarks', 'economicsMarks', 'englishMarks'],
          optional: ['mathsMarks'],
          labels: {
            accountancyMarks: 'Accountancy',
            businessStudiesMarks: 'Business Studies',
            economicsMarks: 'Economics',
            englishMarks: 'English',
            mathsMarks: 'Mathematics (if applicable)'
          }
        };
      case 'arts':
        return {
          core: ['historyMarks', 'geographyMarks', 'politicalScienceMarks', 'englishMarks'],
          optional: [],
          labels: {
            historyMarks: 'History',
            geographyMarks: 'Geography',
            politicalScienceMarks: 'Political Science',
            englishMarks: 'English'
          }
        };
      default:
        return {
          core: ['englishMarks'],
          optional: ['physicsMarks', 'chemistryMarks', 'mathsMarks'],
          labels: {
            englishMarks: 'English',
            physicsMarks: 'Physics',
            chemistryMarks: 'Chemistry',
            mathsMarks: 'Mathematics'
          }
        };
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 0: // Personal Information
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
        break;

      case 1: // Academic Records
        if (!formData.class10Percentage) newErrors.class10Percentage = '10th percentage is required';
        else if (parseFloat(formData.class10Percentage) < 0 || parseFloat(formData.class10Percentage) > 100) {
          newErrors.class10Percentage = 'Invalid percentage';
        }
        if (!formData.class12Percentage) newErrors.class12Percentage = '12th percentage is required';
        else if (parseFloat(formData.class12Percentage) < 0 || parseFloat(formData.class12Percentage) > 100) {
          newErrors.class12Percentage = 'Invalid percentage';
        }
        if (!formData.class10Board) newErrors.class10Board = '10th board is required';
        if (!formData.class12Board) newErrors.class12Board = '12th board is required';
        if (!formData.class12Stream) newErrors.class12Stream = '12th stream is required';
        
        // Validate subject-specific marks based on recommended stream
        const subjects = getRequiredSubjects();
        subjects.core.forEach(subject => {
          const fieldValue = (formData as Record<string, any>)[subject];
          if (!fieldValue) {
            newErrors[subject] = `${subjects.labels[subject]} marks are required`;
          } else {
            const marks = parseFloat(fieldValue);
            if (marks < 0 || marks > 100) {
              newErrors[subject] = `Invalid ${subjects.labels[subject]} marks`;
            }
          }
        });
        break;

      case 2: // Accommodation Preference
        if (!formData.accommodationType) newErrors.accommodationType = 'Please select accommodation type';
        if (formData.accommodationType === 'dayscholar' && !formData.preferredDistance) {
          newErrors.preferredDistance = 'Please select preferred distance';
        }
        break;

      case 3: // Additional Preferences
        if (!formData.budgetRange) newErrors.budgetRange = 'Budget range is required';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else if (onBack) {
      onBack();
    }
  };

  const handleSubmit = () => {
    const profile = {
      ...formData,
      completedAt: new Date().toISOString(),
      profileType: 'detailed'
    };
    
    // Debug: Log the profile data being submitted
    console.log('Submitting profile data:', profile);
    console.log('Class 12 Percentage:', profile.class12Percentage);
    console.log('State:', profile.state);
    console.log('Accommodation Type:', profile.accommodationType);
    
    onComplete(profile);
  };

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="+91 9876543210"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
          <select
            value={formData.state}
            onChange={(e) => handleInputChange('state', e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.state ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select State</option>
            {states.map(state => (
              <option key={state} value={state.toLowerCase().replace(/\s+/g, ' ')}>{state}</option>
            ))}
          </select>
          {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
        <textarea
          value={formData.address}
          onChange={(e) => handleInputChange('address', e.target.value)}
          rows={3}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
            errors.address ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Enter your complete address"
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.city ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your city"
          />
          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Pincode *</label>
          <input
            type="text"
            value={formData.pincode}
            onChange={(e) => handleInputChange('pincode', e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.pincode ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="123456"
          />
          {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
        </div>
      </div>
    </div>
  );

  const renderAcademicInfo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Class 10th Percentage *</label>
          <input
            type="number"
            min="0"
            max="100"
            step="0.01"
            value={formData.class10Percentage}
            onChange={(e) => handleInputChange('class10Percentage', e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.class10Percentage ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="85.5"
          />
          {errors.class10Percentage && <p className="text-red-500 text-sm mt-1">{errors.class10Percentage}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Class 10th Board *</label>
          <select
            value={formData.class10Board}
            onChange={(e) => handleInputChange('class10Board', e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.class10Board ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select Board</option>
            {boards.map(board => (
              <option key={board} value={board}>{board}</option>
            ))}
          </select>
          {errors.class10Board && <p className="text-red-500 text-sm mt-1">{errors.class10Board}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Class 12th Percentage *</label>
          <input
            type="number"
            min="0"
            max="100"
            step="0.01"
            value={formData.class12Percentage}
            onChange={(e) => handleInputChange('class12Percentage', e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.class12Percentage ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="92.3"
          />
          {errors.class12Percentage && <p className="text-red-500 text-sm mt-1">{errors.class12Percentage}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Class 12th Board *</label>
          <select
            value={formData.class12Board}
            onChange={(e) => handleInputChange('class12Board', e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.class12Board ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select Board</option>
            {boards.map(board => (
              <option key={board} value={board}>{board}</option>
            ))}
          </select>
          {errors.class12Board && <p className="text-red-500 text-sm mt-1">{errors.class12Board}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Class 12th Stream *</label>
        <select
          value={formData.class12Stream}
          onChange={(e) => handleInputChange('class12Stream', e.target.value)}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
            errors.class12Stream ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select Stream</option>
          {streams.map(stream => (
            <option key={stream} value={stream}>{stream}</option>
          ))}
        </select>
        {errors.class12Stream && <p className="text-red-500 text-sm mt-1">{errors.class12Stream}</p>}
      </div>

      {/* Subject-specific marks based on recommended stream */}
      {userProfile?.recommendations?.primaryStream && (
        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            Subject-wise Marks for {userProfile.recommendations.primaryStream.charAt(0).toUpperCase() + userProfile.recommendations.primaryStream.slice(1)} Stream
          </h3>
          <p className="text-blue-700 mb-4">
            Based on your career quiz results, please provide your Class 12th marks for the following subjects:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {getRequiredSubjects().core.map(subject => (
              <div key={subject}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {getRequiredSubjects().labels[subject]} *
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.01"
                  value={(formData as Record<string, any>)[subject] || ''}
                  onChange={(e) => handleInputChange(subject, e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errors[subject] ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter marks out of 100"
                />
                {errors[subject] && <p className="text-red-500 text-sm mt-1">{errors[subject]}</p>}
              </div>
            ))}
            
            {getRequiredSubjects().optional.map(subject => (
              <div key={subject}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {getRequiredSubjects().labels[subject]}
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.01"
                  value={(formData as Record<string, any>)[subject] || ''}
                  onChange={(e) => handleInputChange(subject, e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter marks out of 100 (optional)"
                />
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> These subject-specific marks will be used to calculate your eligibility for different courses and colleges, providing more accurate recommendations than overall percentage alone.
            </p>
          </div>
        </div>
      )}
    </div>
  );

  const renderAccommodationPreference = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">Accommodation Preference *</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => handleInputChange('accommodationType', 'hostel')}
            className={`p-6 border-2 rounded-lg transition-all duration-200 ${
              formData.accommodationType === 'hostel'
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Building2 className="h-8 w-8 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Hostel</h3>
            <p className="text-sm opacity-80">
              I want to stay in college hostel or nearby accommodation
            </p>
          </button>

          <button
            type="button"
            onClick={() => handleInputChange('accommodationType', 'dayscholar')}
            className={`p-6 border-2 rounded-lg transition-all duration-200 ${
              formData.accommodationType === 'dayscholar'
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Home className="h-8 w-8 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Day Scholar</h3>
            <p className="text-sm opacity-80">
              I want to commute from home daily
            </p>
          </button>
        </div>
        {errors.accommodationType && <p className="text-red-500 text-sm mt-2">{errors.accommodationType}</p>}
      </div>

      {formData.accommodationType === 'dayscholar' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Distance from Home *
          </label>
          <select
            value={formData.preferredDistance}
            onChange={(e) => handleInputChange('preferredDistance', e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.preferredDistance ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select Distance</option>
            <option value="within-city">Within City (0-20 km)</option>
            <option value="nearby-city">Nearby Cities (20-50 km)</option>
            <option value="same-state">Same State (50+ km)</option>
          </select>
          {errors.preferredDistance && <p className="text-red-500 text-sm mt-1">{errors.preferredDistance}</p>}
        </div>
      )}

      {formData.accommodationType === 'hostel' && (
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Hostel Preference Selected</h4>
          <p className="text-blue-700 text-sm">
            We'll recommend colleges across India that offer hostel facilities and match your academic profile.
          </p>
        </div>
      )}
    </div>
  );

  const renderAdditionalPreferences = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Annual Budget Range *</label>
        <select
          value={formData.budgetRange}
          onChange={(e) => handleInputChange('budgetRange', e.target.value)}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
            errors.budgetRange ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select Budget Range</option>
          <option value="0-50000">₹0 - ₹50,000</option>
          <option value="50000-100000">₹50,000 - ₹1,00,000</option>
          <option value="100000-200000">₹1,00,000 - ₹2,00,000</option>
          <option value="200000-500000">₹2,00,000 - ₹5,00,000</option>
          <option value="500000+">₹5,00,000+</option>
        </select>
        {errors.budgetRange && <p className="text-red-500 text-sm mt-1">{errors.budgetRange}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements (Optional)</label>
        <textarea
          value={formData.specialNeeds}
          onChange={(e) => handleInputChange('specialNeeds', e.target.value)}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Any special requirements or accessibility needs..."
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    index <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    <step.icon className="h-5 w-5" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-1 mx-2 ${
                      index < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {steps[currentStep].title}
              </h2>
              <p className="text-gray-600">{steps[currentStep].description}</p>
            </div>
          </div>

          {/* Form Content */}
          <div className="mb-8">
            {currentStep === 0 && renderPersonalInfo()}
            {currentStep === 1 && renderAcademicInfo()}
            {currentStep === 2 && renderAccommodationPreference()}
            {currentStep === 3 && renderAdditionalPreferences()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              className="flex items-center px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              {currentStep === 0 ? 'Back to Quiz' : 'Previous'}
            </button>
            <button
              onClick={nextStep}
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {currentStep === steps.length - 1 ? 'Complete Profile' : 'Next'}
              <ChevronRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfileForm;
