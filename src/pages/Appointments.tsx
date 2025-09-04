import React from 'react';
import { Phone, Mail, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

const Appointments: React.FC = () => {
  const appointmentTypes = [
    {
      title: 'New Patient Visits',
      description: 'Comprehensive evaluation and health assessment',
      duration: '45-60 minutes',
      requirements: 'Completed intake form required'
    },
    {
      title: 'Annual Physical Exams',
      description: 'Routine preventive care and health screenings',
      duration: '30-45 minutes',
      requirements: 'Fasting may be required for lab work'
    },
    {
      title: 'Follow-up Visits',
      description: 'Ongoing care for chronic conditions',
      duration: '15-30 minutes',
      requirements: 'Recent test results if applicable'
    },
    {
      title: 'Acute Care Visits',
      description: 'Treatment for illness, injury, or urgent symptoms',
      duration: '15-30 minutes',
      requirements: 'Same-day availability based on triage'
    }
  ];

  const policies = [
    {
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      title: 'Scheduling Policy',
      description: 'Appointments are requested by phone or email only. No online portal or booking system.'
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-600" />,
      title: 'Same-Day Requests',
      description: 'Same-day appointments accommodated based on clinical triage and provider availability.'
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-amber-600" />,
      title: 'Cancellation Policy',
      description: 'Please provide one business day notice to avoid a documented late cancellation.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Schedule Your Appointment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make scheduling convenient with flexible appointment options 
              and personalized service from our friendly staff.
            </p>
          </div>
        </div>
      </section>

      {/* How to Schedule */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Schedule</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-8 text-center">
              <Phone className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Call Our Office</h3>
              <p className="text-gray-700 mb-6">
                Speak directly with our scheduling staff during business hours for 
                immediate assistance and appointment confirmation.
              </p>
              <a
                href="tel:(555) 018-4372"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                (555) 018-4372
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Request</h3>
              <p className="text-gray-700 mb-6">
                Send us an email with your callback number and preferred times. 
                We'll respond within one business day.
              </p>
              <a
                href="mailto:appointments@willowcreekmed.example"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
            <Clock className="w-8 h-8 text-teal-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Hours</h3>
            <div className="text-gray-700 space-y-2">
              <p><strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM</p>
              <p><strong>Saturday:</strong> 8:00 AM - 1:00 PM</p>
              <p><strong>Sunday:</strong> Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Types of Appointments
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appointmentTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium text-gray-700">{type.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Requirements:</span>
                    <span className="font-medium text-gray-700">{type.requirements}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Appointment Policies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="mb-4">
                  {policy.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{policy.title}</h3>
                <p className="text-gray-600 leading-relaxed">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Appointment Process
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
              <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600">Call during business hours or email with your callback number and preferred appointment times.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
              <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Schedule Confirmation</h3>
                <p className="text-gray-600">Our staff will offer available options and confirm your appointment by phone or email.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
              <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Visit Preparation</h3>
                <p className="text-gray-600">Arrive 10 minutes early with required documents. Bring insurance card, ID, and any relevant medical records.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-12 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-100 border border-red-200 rounded-xl p-6 text-center">
            <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-red-900 mb-2">For Urgent Symptoms</h3>
            <p className="text-red-800 mb-4">
              Call our clinic during business hours for urgent symptoms. For life-threatening 
              emergencies, call <strong>911</strong> immediately.
            </p>
            <p className="text-red-700 text-sm">
              After-hours urgent care is available at local emergency departments and urgent care centers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointments;