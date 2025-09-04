import React from 'react';
import { Video, Phone, Monitor, CheckCircle, X } from 'lucide-react';

const Telehealth: React.FC = () => {
  const availableServices = [
    'Follow-up appointments for chronic conditions',
    'Medication checks and adjustments',
    'Minor cold and flu symptoms',
    'Review of test results',
    'Mental health consultations',
    'Prescription refills (when appropriate)',
    'Health education and counseling'
  ];

  const requireInPerson = [
    'Physical examinations',
    'Diagnostic procedures',
    'Vaccinations and injections',
    'Most new patient visits',
    'Wound care and minor procedures',
    'Blood pressure checks requiring accuracy',
    'Any condition requiring hands-on assessment'
  ];

  const process = [
    {
      step: '1',
      title: 'Schedule by Phone',
      description: 'Call our office to request a telehealth appointment. Staff will confirm your eligibility and schedule.',
      icon: <Phone className="w-6 h-6" />
    },
    {
      step: '2',
      title: 'Receive Video Link',
      description: 'We\'ll email you a secure video link 15 minutes before your scheduled appointment time.',
      icon: <Monitor className="w-6 h-6" />
    },
    {
      step: '3',
      title: 'Join Your Visit',
      description: 'Click the link at your appointment time. No external platform account required.',
      icon: <Video className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Telehealth Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Convenient virtual care options for select follow-ups, consultations, 
              and minor health concerns—bringing quality healthcare to your home.
            </p>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            When Telehealth is Available
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-semibold text-green-900">Available via Telehealth</h3>
              </div>
              <ul className="space-y-3">
                {availableServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-green-800">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <X className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-semibold text-red-900">Requires In-Person Visit</h3>
              </div>
              <ul className="space-y-3">
                {requireInPerson.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-red-800">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How Telehealth Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">{item.step}</span>
                </div>
                <div className="text-teal-600 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Requirements */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Technology Requirements
          </h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Recommended Setup</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Stable internet connection</li>
                  <li>• Computer, tablet, or smartphone with camera</li>
                  <li>• Working microphone and speakers</li>
                  <li>• Quiet, private location for your visit</li>
                  <li>• Good lighting so your provider can see you clearly</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">What We Provide</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Secure, HIPAA-compliant video platform</li>
                  <li>• Email link sent 15 minutes before appointment</li>
                  <li>• No account creation or app download required</li>
                  <li>• Technical support if you have connection issues</li>
                  <li>• Phone backup option if video fails</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-amber-200 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Important Limitations</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Telehealth cannot replace all aspects of in-person care.</strong> Physical 
                examinations, diagnostic procedures, and many new patient evaluations require 
                an in-person visit for safety and accuracy.
              </p>
              <p>
                Your provider will determine during the telehealth visit if an in-person 
                follow-up is necessary based on your symptoms and condition.
              </p>
              <p>
                For urgent symptoms or emergencies, please call our clinic or seek 
                immediate care at an emergency department.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for a Virtual Visit?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Call our office to determine if telehealth is right for your healthcare needs.
          </p>
          <a
            href="tel:(555) 018-4372"
            className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Schedule Telehealth Visit
          </a>
        </div>
      </section>
    </div>
  );
};

export default Telehealth;