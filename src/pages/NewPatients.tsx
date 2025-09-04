import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, CreditCard, Clock, Shield } from 'lucide-react';

const NewPatients: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Review Privacy Practices',
      description: 'Read our Notice of Privacy Practices to understand how we protect your health information.',
      icon: <Shield className="w-6 h-6" />,
      action: 'View Privacy Notice',
      link: '/privacy'
    },
    {
      number: '2',
      title: 'Complete Intake Form',
      description: 'Fill out our New Patient Intake Form online or print a copy to bring to your visit.',
      icon: <FileText className="w-6 h-6" />,
      action: 'Complete Form',
      link: '/patient-forms'
    },
    {
      number: '3',
      title: 'Request Appointment',
      description: 'Call our clinic to request an appointment window. Staff will confirm date and time.',
      icon: <Clock className="w-6 h-6" />,
      action: 'Schedule Visit',
      link: '/appointments'
    },
    {
      number: '4',
      title: 'Prepare for Visit',
      description: 'Arrive 10 minutes early with required documents for check-in and verification.',
      icon: <CheckCircle className="w-6 h-6" />,
      action: 'What to Bring',
      link: '#what-to-bring'
    }
  ];

  const whatToBring = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Government-issued Photo ID',
      description: 'Valid driver\'s license, passport, or state ID card'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Insurance Card',
      description: 'Current insurance card with all necessary information visible'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Medication List',
      description: 'Complete list of current medications, supplements, and known allergies'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Medical Records',
      description: 'Recent test results, vaccination records, or previous medical records'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Welcome New Patients
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're accepting new patients of all ages. Our streamlined onboarding 
              process ensures your first visit is efficient and comprehensive.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Notice */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">New Patient Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              Willow Creek Medical Group is open to new patients. First visits require completion 
              of our <strong>New Patient Intake Form</strong> and acknowledgment of our privacy practices. 
              We do not use online portals or scheduling systems—all appointments are requested by phone or email 
              to ensure personalized service and proper care coordination.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Getting Started is Easy
            </h2>
            <p className="text-xl text-gray-600">
              Follow these simple steps to become a patient at our clinic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors duration-200">
                    <span className="text-2xl font-bold text-teal-600">{step.number}</span>
                  </div>
                  <div className="text-teal-600 mb-4 flex justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                <Link
                  to={step.link}
                  className="text-teal-600 font-medium hover:text-teal-700 transition-colors inline-flex items-center gap-2"
                >
                  {step.action}
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section id="what-to-bring" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What to Bring to Your First Visit
            </h2>
            <p className="text-xl text-gray-600">
              Please bring these items to ensure a smooth check-in process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatToBring.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                <div className="text-teal-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-amber-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Information</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Appointment Scheduling</p>
                  <p className="text-sm text-gray-600">All appointments are scheduled by phone or email only. We do not use online booking systems.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Insurance Verification</p>
                  <p className="text-sm text-gray-600">Please verify your insurance coverage before your visit. We'll help confirm benefits during scheduling.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Forms Completion</p>
                  <p className="text-sm text-gray-600">Completing forms ahead of time helps reduce wait times and ensures we have all necessary information.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Practice?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Complete the New Patient Intake Form, then call to choose a time that works for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/patient-forms"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Complete Intake Form
            </Link>
            <a
              href="tel:(555) 018-4372"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors duration-200"
            >
              Call to Schedule
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewPatients;