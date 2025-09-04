import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText, Shield, CheckCircle } from 'lucide-react';
import IntakeForm from '../components/IntakeForm';

const PatientForms: React.FC = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null);

  const forms = [
    {
      id: 'intake',
      title: 'New Patient Intake Form',
      description: 'Required for all new patients. Complete online or print to bring to your visit.',
      type: 'Interactive',
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: 'consent',
      title: 'Consent to Treat and Financial Policy',
      description: 'Review our treatment consent and financial policies before your visit.',
      type: 'PDF Download',
      icon: <Download className="w-6 h-6" />
    },
    {
      id: 'hipaa',
      title: 'HIPAA Notice of Privacy Practices',
      description: 'Complete information about how we protect your health information.',
      type: 'View Online / PDF',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const downloadPDF = (formType: string) => {
    // In a real implementation, this would download actual PDF files
    alert(`This would download the ${formType} PDF in a real implementation.`);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Patient Forms
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete your paperwork before your visit to reduce wait times and 
              ensure we have all the information needed to provide the best care.
            </p>
          </div>
        </div>
      </section>

      {/* Forms Overview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {forms.map((form) => (
              <div key={form.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200">
                <div className="text-teal-600 mb-4">
                  {form.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{form.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{form.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-teal-600 font-medium bg-teal-50 px-2 py-1 rounded">
                    {form.type}
                  </span>
                  {form.id === 'intake' ? (
                    <button
                      onClick={() => setActiveForm(activeForm === 'intake' ? null : 'intake')}
                      className="text-teal-600 font-medium hover:text-teal-700 transition-colors"
                    >
                      {activeForm === 'intake' ? 'Hide Form' : 'Open Form'}
                    </button>
                  ) : form.id === 'hipaa' ? (
                    <Link
                      to="/privacy"
                      className="text-teal-600 font-medium hover:text-teal-700 transition-colors"
                    >
                      View Online
                    </Link>
                  ) : (
                    <button
                      onClick={() => downloadPDF(form.title)}
                      className="text-teal-600 font-medium hover:text-teal-700 transition-colors"
                    >
                      Download PDF
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Intake Form */}
          {activeForm === 'intake' && (
            <div className="bg-gray-50 rounded-xl p-8 border-2 border-teal-200">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-teal-600" />
                <h2 className="text-2xl font-bold text-gray-900">New Patient Intake Form</h2>
              </div>
              <IntakeForm />
            </div>
          )}
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Important Notes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Form Submission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Online forms are for your convenience. You may also print blank copies 
                and complete them by hand to bring to your visit. No electronic signatures 
                are required—all forms are signed in person during check-in.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Privacy & Security</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All forms are stored securely and handled according to HIPAA guidelines. 
                Your personal health information is protected and only shared as necessary 
                for your care or as required by law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Questions About the Process?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Our friendly staff is here to help you through every step of becoming a new patient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(555) 018-4372"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Call (555) 018-4372
            </a>
            <a
              href="mailto:info@willowcreekmed.example"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors duration-200"
            >
              Email Questions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientForms;