import React from 'react';
import { Users, Heart, GraduationCap, Mail, CheckCircle } from 'lucide-react';

const Careers: React.FC = () => {
  const openRoles = [
    {
      title: 'Medical Assistant',
      department: 'Clinical',
      type: 'Full-time',
      description: 'Support our clinical team with patient care, vital signs, and administrative duties.',
      requirements: [
        'Medical Assistant certification or equivalent experience',
        'Strong communication and organizational skills',
        'Bilingual (English/Spanish) preferred',
        'Experience with electronic health records'
      ]
    },
    {
      title: 'Front Desk Coordinator',
      department: 'Administration',
      type: 'Full-time',
      description: 'Provide excellent patient service, manage scheduling, and handle administrative tasks.',
      requirements: [
        'Customer service experience in healthcare setting',
        'Strong phone and computer skills',
        'Insurance verification experience preferred',
        'Professional demeanor and attention to detail'
      ]
    },
    {
      title: 'Registered Nurse',
      department: 'Clinical',
      type: 'Part-time/Full-time',
      description: 'Provide direct patient care, assist with procedures, and support our healthcare team.',
      requirements: [
        'Active RN license in Virginia',
        'Minimum 2 years clinical experience',
        'BLS certification required',
        'Primary care or ambulatory experience preferred'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
      title: 'Professional Development',
      description: 'Continuing education support, certification assistance, and career advancement'
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: 'Work-Life Balance',
      description: 'Flexible scheduling, paid time off, and supportive team environment'
    }
  ];

  const values = [
    'Compassionate patient care',
    'Professional excellence',
    'Collaborative teamwork',
    'Continuous learning',
    'Community service',
    'Diversity and inclusion'
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a healthcare team dedicated to providing exceptional care 
              to families throughout Northern Virginia. We're looking for passionate 
              professionals who share our commitment to patient wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Willow Creek Medical Group
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <div className="mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Our Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Current Openings
          </h2>
          
          <div className="space-y-8">
            {openRoles.map((role, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{role.title}</h3>
                      <div className="flex gap-2 mt-2 sm:mt-0">
                        <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-medium">
                          {role.department}
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                          {role.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{role.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {role.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:w-48 flex-shrink-0">
                    <a
                      href="mailto:careers@willowcreekmed.example"
                      className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 text-center block"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Application Process
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Submit Application</h3>
                <p className="text-gray-600">Email your resume and cover letter to careers@willowcreekmed.example. Include your availability and position of interest.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Initial Review</h3>
                <p className="text-gray-600">Our team will review your application and contact qualified candidates within one week for a phone screening.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-6">
              <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Interview Process</h3>
                <p className="text-gray-600">In-person interviews with department managers and team members, followed by reference checks for final candidates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Environment */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Work Environment
            </h2>
            <p className="text-xl text-gray-600">
              Join a supportive team focused on patient care and professional growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Culture</h3>
              <p className="text-gray-600 leading-relaxed">
                We foster a collaborative environment where every team member's contribution 
                is valued. Our clinic emphasizes continuous learning, professional development, 
                and maintaining the highest standards of patient care.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Growth Opportunities</h3>
              <p className="text-gray-600 leading-relaxed">
                We invest in our team through continuing education, conference attendance, 
                certification support, and clear advancement pathways. Many of our current 
                leaders started in entry-level positions and grew with our practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Career with Us
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Send your resume and availability to begin the application process.
          </p>
          <a
            href="mailto:careers@willowcreekmed.example"
            className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Email Your Application
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;