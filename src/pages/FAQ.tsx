import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Phone } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      category: 'New Patients',
      questions: [
        {
          q: 'How do I become a new patient?',
          a: 'Review the New Patients page and complete the intake form, then call (555) 018-4372 to request a visit time. We welcome new patients of all ages.'
        },
        {
          q: 'What should I bring to my first appointment?',
          a: 'Bring a government-issued photo ID, your insurance card, a list of current medications and allergies, and any recent test results or vaccination records.'
        },
        {
          q: 'How long does a new patient visit take?',
          a: 'New patient visits typically take 45-60 minutes to allow for a comprehensive health assessment and discussion of your medical history.'
        }
      ]
    },
    {
      category: 'Appointments & Scheduling',
      questions: [
        {
          q: 'Do you offer walk-in visits?',
          a: 'Limited same-day visits may be available by phone triage. Call (555) 018-4372 during business hours to check availability for urgent needs.'
        },
        {
          q: 'Can I schedule appointments online?',
          a: 'No, we do not use online scheduling. All appointments are requested by phone or email to ensure personalized service and proper care coordination.'
        },
        {
          q: 'What is your cancellation policy?',
          a: 'Please provide one business day notice to avoid a documented late cancellation. This helps us offer your appointment time to other patients.'
        }
      ]
    },
    {
      category: 'Insurance & Billing',
      questions: [
        {
          q: 'Do you accept my insurance?',
          a: 'We accept most major plans including UnitedHealthcare, Aetna, Cigna, Anthem, Humana, Kaiser Permanente, Medicare, and Virginia Medicaid. Call to verify your specific plan.'
        },
        {
          q: 'When is payment due?',
          a: 'Copays and deductibles are collected at the time of service. We accept cash, check, and major credit cards. Payment plans are available for larger balances.'
        },
        {
          q: 'Can you provide cost estimates?',
          a: 'Yes, we provide cost estimates on request for common services and procedures. Call our billing department for specific pricing information.'
        }
      ]
    },
    {
      category: 'Services & Care',
      questions: [
        {
          q: 'Do you offer telehealth visits?',
          a: 'Yes, telehealth is available for select follow-ups, medication checks, minor cold and flu symptoms, and test result reviews. Physical exams and new patient visits require in-person care.'
        },
        {
          q: 'What languages do you speak?',
          a: 'Our providers speak English and Spanish. We can arrange interpreters for other languages upon request during appointment scheduling.'
        },
        {
          q: 'Do you provide urgent care?',
          a: 'We accommodate same-day urgent visits based on clinical triage during business hours. For after-hours emergencies, visit local urgent care centers or emergency departments.'
        }
      ]
    },
    {
      category: 'Location & Accessibility',
      questions: [
        {
          q: 'Where are you located?',
          a: 'We are located at 44100 Ashburn Village Boulevard, Suite 200, Ashburn, VA 20147, near Ashburn Village Center with free on-site parking.'
        },
        {
          q: 'Is your office wheelchair accessible?',
          a: 'Yes, our office is fully accessible with elevator access, wheelchair-friendly entrances, and handicapped parking spaces. Service animals are welcome.'
        },
        {
          q: 'What are your office hours?',
          a: 'Monday-Friday: 8:00 AM - 5:00 PM, Saturday: 8:00 AM - 1:00 PM, Sunday: Closed. Extended hours may be available for urgent needs.'
        }
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services, policies, 
              and procedures. Can't find what you're looking for? Give us a call.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <HelpCircle className="w-6 h-6 text-teal-600" />
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const itemIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openItems.includes(itemIndex);
                  
                  return (
                    <div key={questionIndex} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleItem(itemIndex)}
                        className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                      >
                        <h3 className="font-semibold text-gray-900 pr-4">{faq.q}</h3>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed pt-4">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
            <HelpCircle className="w-12 h-12 text-teal-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our friendly staff is available during business hours to answer any questions 
              about our services, policies, or procedures. We're here to help make your 
              healthcare experience as smooth as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(555) 018-4372"
                className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors duration-200 inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (555) 018-4372
              </a>
              <a
                href="mailto:info@willowcreekmed.example"
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors duration-200"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;