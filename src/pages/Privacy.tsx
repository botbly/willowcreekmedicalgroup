import React from 'react';
import { Shield, Download, Eye, Lock, Phone } from 'lucide-react';

const Privacy: React.FC = () => {
  const privacyRights = [
    {
      icon: <Eye className="w-5 h-5 text-blue-600" />,
      title: 'Right to Access',
      description: 'You have the right to review and obtain copies of your medical records'
    },
    {
      icon: <Lock className="w-5 h-5 text-green-600" />,
      title: 'Right to Correction',
      description: 'You may request corrections to your medical information if you believe it is incorrect'
    },
    {
      icon: <Shield className="w-5 h-5 text-purple-600" />,
      title: 'Right to Restrictions',
      description: 'You may request limitations on how we use or share your health information'
    }
  ];

  const howWeUse = [
    'Providing your medical treatment and care',
    'Processing payments and billing for services',
    'Healthcare operations including quality improvement',
    'Required reporting to public health authorities',
    'Coordination with other healthcare providers',
    'Legal proceedings when required by court order'
  ];

  const howWeProtect = [
    'Secure electronic health records with access controls',
    'Staff training on HIPAA compliance and privacy',
    'Physical safeguards for paper records and facilities',
    'Limited access on a need-to-know basis only',
    'Regular security assessments and updates',
    'Encrypted communication for sensitive information'
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Privacy & HIPAA Notice
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy is our priority. We follow all federal HIPAA regulations 
              to protect your personal health information and maintain your trust.
            </p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-blue-900">Privacy Protection Summary</h2>
            </div>
            <p className="text-blue-800 leading-relaxed mb-6">
              Willow Creek Medical Group follows federal privacy rules (HIPAA) for protected health information. 
              This notice describes how medical information about you may be used and disclosed and how you can 
              get access to this information.
            </p>
            <button
              onClick={() => alert('This would download the complete HIPAA Notice PDF in a real implementation.')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Complete Notice (PDF)
            </button>
          </div>

          {/* Your Rights */}
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Privacy Rights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {privacyRights.map((right, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <div className="mb-4">
                  {right.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">{right.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{right.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">How We Use Your Information</h3>
              <ul className="space-y-3">
                {howWeUse.map((use, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">How We Protect Your Information</h3>
              <ul className="space-y-3">
                {howWeProtect.map((protection, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{protection}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Policies */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Detailed Privacy Policies</h2>
          
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Uses and Disclosures</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use and disclose your protected health information for treatment, payment, 
                and healthcare operations. Treatment includes providing, coordinating, or managing 
                your healthcare. Payment includes billing and collection activities. Healthcare 
                operations include quality assessment, staff review, and other administrative activities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We may also disclose your information when required by law, for public health activities, 
                health oversight activities, judicial proceedings, law enforcement, or to prevent serious 
                threats to health or safety.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Authorization</h3>
              <p className="text-gray-700 leading-relaxed">
                Most uses and disclosures not described in this notice require your written authorization. 
                You may revoke your authorization in writing at any time, except to the extent that we 
                have already taken action in reliance on your authorization.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Complaints</h3>
              <p className="text-gray-700 leading-relaxed">
                If you believe your privacy rights have been violated, you may file a complaint with 
                our Privacy Officer or with the U.S. Department of Health and Human Services. 
                You will not be retaliated against for filing a complaint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Privacy */}
      <section className="py-12 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-teal-200 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy Questions or Requests</h3>
            <p className="text-gray-700 mb-6">
              Contact our Privacy Officer for questions about this notice, to request access to your records, 
              or to request restrictions on the use of your information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(555) 018-4372"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Privacy Officer
              </a>
              <a
                href="mailto:privacy@willowcreekmed.example"
                className="border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors duration-200"
              >
                Email Privacy Requests
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Effective Date */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-sm">
            This Notice of Privacy Practices is effective as of January 1, 2025, and may be revised. 
            The current version is always available on our website and at our front desk.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;