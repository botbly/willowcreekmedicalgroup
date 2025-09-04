import React from 'react';
import { Shield, CreditCard, Phone, AlertTriangle, CheckCircle } from 'lucide-react';

const Insurance: React.FC = () => {
  const acceptedPlans = [
    {
      name: 'UnitedHealthcare',
      details: 'All major UnitedHealthcare plans including UHC Choice and UHC Options'
    },
    {
      name: 'Aetna',
      details: 'Aetna Better Health, Aetna Open Choice, and most commercial plans'
    },
    {
      name: 'Cigna Healthcare',
      details: 'Cigna HealthCare and Cigna Open Access plans'
    },
    {
      name: 'Elevance Health (Anthem)',
      details: 'Anthem Blue Cross Blue Shield including HealthKeepers Virginia'
    },
    {
      name: 'Humana',
      details: 'Humana Gold Plus, Humana Medicare Advantage, and commercial plans'
    },
    {
      name: 'Kaiser Permanente',
      details: 'Kaiser Permanente Mid-Atlantic region plans'
    },
    {
      name: 'Medicare',
      details: 'Traditional Medicare and most Medicare Advantage plans'
    },
    {
      name: 'Virginia Medicaid',
      details: 'Virginia Medicaid and managed care organizations'
    }
  ];

  const importantNotes = [
    {
      icon: <CreditCard className="w-5 h-5 text-blue-600" />,
      title: 'Patient Responsibility',
      description: 'Patients are responsible for copays, coinsurance, and deductibles as determined by their insurance plan.'
    },
    {
      icon: <Shield className="w-5 h-5 text-green-600" />,
      title: 'Always Bring Your Card',
      description: 'Insurance card and government-issued ID required at every visit for verification and billing.'
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-teal-600" />,
      title: 'Coverage Verification',
      description: 'Coverage varies by plan and network. We recommend verifying benefits before your visit.'
    },
    {
      icon: <Phone className="w-5 h-5 text-purple-600" />,
      title: 'Cost Estimates',
      description: 'The clinic will provide cost estimates on request for common services and procedures.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Insurance & Billing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We accept most major insurance plans and work with you to understand 
              your coverage and any out-of-pocket costs.
            </p>
          </div>
        </div>
      </section>

      {/* Accepted Plans */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Accepted Insurance Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {acceptedPlans.map((plan, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{plan.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{plan.details}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 inline-block">
              <p className="text-blue-800 font-medium">
                Don't see your plan listed? Call us at <strong>(555) 018-4372</strong> to verify coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Important Billing Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {importantNotes.map((note, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  {note.icon}
                  <h3 className="text-lg font-semibold text-gray-900">{note.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{note.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Understanding Your Coverage
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Before Your Visit</h3>
              <p className="text-gray-600 leading-relaxed">
                We recommend calling your insurance company to verify that our clinic is in-network 
                and to understand your specific benefits, including copays, deductibles, and 
                coinsurance amounts. This helps avoid unexpected costs.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">At Your Visit</h3>
              <p className="text-gray-600 leading-relaxed">
                Payment for copays and deductibles is collected at the time of service. 
                We accept cash, check, and major credit cards. Our staff will provide 
                a cost estimate for any additional services that may be recommended.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">After Your Visit</h3>
              <p className="text-gray-600 leading-relaxed">
                We'll submit claims to your insurance company and send you a summary 
                of charges. Any remaining balance will be billed to you directly. 
                Payment plans are available for larger balances when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Pay Information */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Self-Pay & Uninsured Patients
          </h2>
          
          <div className="bg-white rounded-xl p-8 border border-blue-200">
            <div className="text-center mb-6">
              <CreditCard className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">We Welcome Self-Pay Patients</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                We offer competitive self-pay rates for patients without insurance or those 
                who prefer to pay directly. Cost estimates are provided upfront for all services.
              </p>
              <p>
                Payment is due at the time of service, and we accept cash, check, and major 
                credit cards. Payment plans may be available for larger procedures or extended care.
              </p>
              <p className="text-center font-medium text-blue-800">
                Call <strong>(555) 018-4372</strong> to discuss self-pay rates and payment options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">Insurance Verification</h3>
                <p className="text-amber-800 text-sm leading-relaxed">
                  Insurance coverage and benefits can change frequently. While we make every effort 
                  to verify your coverage, it is ultimately your responsibility to understand your 
                  plan's benefits, limitations, and any prior authorization requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Questions About Coverage?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Our billing team is here to help you understand your insurance benefits and costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(555) 018-4372"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Call Billing Department
            </a>
            <a
              href="mailto:billing@willowcreekmed.example"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors duration-200"
            >
              Email Billing Questions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insurance;