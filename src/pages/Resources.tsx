import React from 'react';
import { Download, FileText, Calendar, MapPin, Phone } from 'lucide-react';

const Resources: React.FC = () => {
  const afterVisitInstructions = [
    'Common Cold and Upper Respiratory Infections',
    'Hypertension Management and Monitoring',
    'Diabetes Care and Blood Sugar Management',
    'Wound Care and Post-Procedure Instructions',
    'Medication Management Guidelines',
    'Exercise and Physical Activity Recommendations'
  ];

  const vaccineInfo = [
    {
      category: 'Children & Adolescents',
      vaccines: ['DTaP/Tdap', 'MMR', 'Varicella (Chickenpox)', 'Polio', 'Hepatitis B', 'HPV', 'Meningococcal']
    },
    {
      category: 'Adults',
      vaccines: ['Annual Flu Shot', 'COVID-19', 'Tdap Booster', 'Shingles (Zoster)', 'Pneumococcal', 'Hepatitis A & B']
    },
    {
      category: 'Travel',
      vaccines: ['Hepatitis A', 'Typhoid', 'Yellow Fever', 'Japanese Encephalitis', 'Meningitis']
    }
  ];

  const localResources = [
    {
      category: 'Urgent Care Centers',
      locations: [
        'Inova Urgent Care - Ashburn (21785 Filigree Ct)',
        'Patient First - Ashburn (44110 Ashburn Shopping Plaza)',
        'MinuteClinic at CVS - Broadlands (21000 Sycolin Rd)'
      ]
    },
    {
      category: 'Hospitals',
      locations: [
        'Inova Loudoun Hospital (44045 Riverside Pkwy, Leesburg)',
        'StoneSprings Hospital Center (24440 Stone Springs Blvd)',
        'Reston Hospital Center (1850 Town Center Pkwy, Reston)'
      ]
    },
    {
      category: 'Imaging Centers',
      locations: [
        'Inova Diagnostic Imaging - Ashburn (19455 Deerfield Ave)',
        'Radiology Associates of Northern Virginia (20600 Gordon Park Square)',
        'Open MRI of Ashburn (44055 Pipeline Plaza)'
      ]
    },
    {
      category: 'Laboratories',
      locations: [
        'LabCorp - Ashburn Village (44030 Ashbrook Marketplace)',
        'Quest Diagnostics - Broadlands (21100 Dulles Town Cir)',
        'Inova Laboratory Services (Multiple locations)'
      ]
    }
  ];

  const downloadResource = (resourceName: string) => {
    // In a real implementation, this would download actual PDF files
    alert(`This would download the ${resourceName} PDF in a real implementation.`);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Patient Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Helpful information and resources to support your healthcare journey 
              and connect you with additional services in the Ashburn area.
            </p>
          </div>
        </div>
      </section>

      {/* After Visit Instructions */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            After Visit Instructions
          </h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-teal-600" />
              <h3 className="text-xl font-semibold text-gray-900">Downloadable Care Instructions</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Take home detailed instructions for common conditions and treatments. 
              These guides help you manage your care between visits and know when to contact us.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {afterVisitInstructions.map((instruction, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow duration-200">
                  <h4 className="font-medium text-gray-900 mb-2">{instruction}</h4>
                  <button
                    onClick={() => downloadResource(instruction)}
                    className="text-teal-600 font-medium hover:text-teal-700 transition-colors text-sm flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vaccine Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Vaccination Schedules
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {vaccineInfo.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-teal-600" />
                  <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.vaccines.map((vaccine, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-sm">{vaccine}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <button
              onClick={() => downloadResource('Complete Vaccination Schedule')}
              className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Complete Schedule
            </button>
          </div>
        </div>
      </section>

      {/* Local Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Local Healthcare Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {localResources.map((resource, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">{resource.category}</h3>
                </div>
                <ul className="space-y-3">
                  {resource.locations.map((location, idx) => (
                    <li key={idx} className="text-gray-600 text-sm leading-relaxed">
                      {location}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Information */}
      <section className="py-12 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-100 border border-red-200 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-red-900 mb-4">Emergency Care Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-red-900 mb-2">Life-Threatening Emergency</h4>
                <p className="text-red-800 text-sm">Call <strong>911</strong> immediately for chest pain, difficulty breathing, severe bleeding, loss of consciousness, or any life-threatening condition.</p>
              </div>
              <div>
                <h4 className="font-semibold text-red-900 mb-2">Urgent Care</h4>
                <p className="text-red-800 text-sm">For urgent but non-life-threatening symptoms during business hours, call our clinic at <strong>(555) 018-4372</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Additional Resources?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Our staff can provide additional information and help connect you with local healthcare services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(555) 018-4372"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
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

export default Resources;