import React from 'react';
import { Heart, Baby, Users, Activity, Stethoscope, Brain, Search, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Primary Care',
      description: 'Comprehensive healthcare for adults',
      details: [
        'Annual physical examinations',
        'Chronic disease management (diabetes, hypertension, heart disease)',
        'Preventive screenings (cancer, cardiovascular)',
        'Vaccination and immunizations',
        'Health counseling and lifestyle guidance'
      ]
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: 'Pediatrics',
      description: 'Complete care for children and adolescents',
      details: [
        'Well-child visits and developmental assessments',
        'Childhood vaccinations and immunization schedules',
        'Sports physicals and school forms',
        'Acute illness treatment (fever, infections, injuries)',
        'Growth and development monitoring'
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Women's Health",
      description: 'Specialized care for women at every life stage',
      details: [
        'Annual gynecologic examinations',
        'Contraception counseling and family planning',
        'Prenatal care coordination',
        'Menopause management',
        'Breast and cervical cancer screenings'
      ]
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Men's Health",
      description: 'Focused healthcare services for men',
      details: [
        'Preventive health screenings',
        'Cardiovascular risk assessment',
        'Prostate health monitoring',
        'Testosterone evaluation',
        'Urology coordination and referrals'
      ]
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Minor Procedures',
      description: 'In-office procedures for your convenience',
      details: [
        'Wound care and suture removal',
        'Ear irrigation and wax removal',
        'Skin lesion evaluation and removal',
        'Joint injections when appropriate',
        'Basic dermatology procedures'
      ]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Diagnostics',
      description: 'On-site testing for immediate results',
      details: [
        'In-clinic EKG (electrocardiogram)',
        'Rapid strep and flu tests',
        'Urine analysis and pregnancy tests',
        'Basic vitals and health assessments',
        'Blood pressure monitoring'
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Behavioral Health',
      description: 'Mental health support and coordination',
      details: [
        'Depression and anxiety screening',
        'Brief counseling interventions',
        'Substance abuse screening',
        'Referrals to mental health specialists',
        'Stress management guidance'
      ]
    },
    {
      icon: <ArrowRight className="w-8 h-8" />,
      title: 'Care Coordination',
      description: 'Seamless referrals and specialist connections',
      details: [
        'Referrals to local specialists',
        'Hospital coordination when needed',
        'Imaging center partnerships',
        'Lab work coordination',
        'Follow-up care management'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Specialties & Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare services designed to meet the diverse needs 
              of patients and families throughout Northern Virginia.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group-hover:border-teal-200 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-teal-600 group-hover:scale-110 transition-transform duration-200">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-12 bg-red-50 border-t border-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-100 border border-red-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-red-900 mb-2">Emergency Care Notice</h3>
            <p className="text-red-800">
              For life-threatening emergencies, call <strong>911</strong> immediately. 
              For urgent symptoms during business hours, call our clinic at{' '}
              <strong>(555) 018-4372</strong>. After hours urgent care is available 
              at local emergency departments and urgent care centers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Questions About Our Services?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Our team is here to help you understand which services are right for you and your family.
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
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;