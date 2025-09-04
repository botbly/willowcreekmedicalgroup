import React from 'react';
import { Star, Languages, Calendar, Phone } from 'lucide-react';

const Providers: React.FC = () => {
  const providers = [
    {
      name: 'Dr. Alice Navarro, MD',
      specialty: 'Internal Medicine',
      image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400',
      education: 'Georgetown University School of Medicine',
      boardCertification: 'American Board of Internal Medicine',
      languages: ['English', 'Spanish'],
      specialInterests: ['Preventive care', 'Chronic disease management', 'Hypertension', 'Diabetes'],
      schedule: 'Monday, Tuesday, Thursday, Friday'
    },
    {
      name: 'Dr. Priyanka Shah, DO',
      specialty: 'Family Medicine',
      image: 'https://images.pexels.com/photos/5407764/pexels-photo-5407764.jpeg?auto=compress&cs=tinysrgb&w=400',
      education: 'Virginia College of Osteopathic Medicine',
      boardCertification: 'American Board of Family Medicine',
      languages: ['English'],
      specialInterests: ['Adolescent wellness', 'Adult preventive care', 'Women\'s health', 'Mental health screening'],
      schedule: 'Monday, Wednesday, Thursday, Friday'
    },
    {
      name: 'Dr. Michael Bennett, MD',
      specialty: 'Pediatrics',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
      education: 'University of Virginia School of Medicine',
      boardCertification: 'American Board of Pediatrics',
      languages: ['English'],
      specialInterests: ['Child development', 'Vaccination schedules', 'Sports medicine', 'ADHD management'],
      schedule: 'Tuesday, Wednesday, Friday, Saturday'
    },
    {
      name: 'Daniel Ortiz, FNP-C',
      specialty: 'Family Nurse Practitioner',
      image: 'https://images.pexels.com/photos/6303773/pexels-photo-6303773.jpeg?auto=compress&cs=tinysrgb&w=400',
      education: 'George Washington University',
      boardCertification: 'American Nurses Credentialing Center',
      languages: ['English', 'Spanish'],
      specialInterests: ['Primary care', 'Same-day visits', 'Acute illness', 'Chronic care follow-up'],
      schedule: 'Monday through Friday, Saturday mornings'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Providers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced healthcare team is dedicated to providing compassionate, 
              comprehensive care for patients of all ages. Each provider brings unique 
              expertise and a commitment to your health and wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Providers Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {providers.map((provider, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      className="w-32 h-32 rounded-2xl object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {provider.name}
                    </h3>
                    <p className="text-lg text-teal-600 font-semibold mb-4">
                      {provider.specialty}
                    </p>
                    
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-medium text-gray-700">Education</p>
                        <p className="text-gray-600">{provider.education}</p>
                      </div>
                      
                      <div>
                        <p className="font-medium text-gray-700">Board Certification</p>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <p className="text-gray-600">{provider.boardCertification}</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="font-medium text-gray-700">Languages</p>
                        <div className="flex items-center gap-2">
                          <Languages className="w-4 h-4 text-blue-500" />
                          <p className="text-gray-600">{provider.languages.join(', ')}</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="font-medium text-gray-700">Clinical Interests</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {provider.specialInterests.map((interest, idx) => (
                            <span
                              key={idx}
                              className="bg-teal-100 text-teal-700 px-2 py-1 rounded-md text-xs font-medium"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="font-medium text-gray-700">Schedule</p>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-green-500" />
                          <p className="text-gray-600">{provider.schedule}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Meet Your Healthcare Team?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Schedule an appointment with one of our experienced providers today.
          </p>
          <a
            href="tel:(555) 018-4372"
            className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call (555) 018-4372
          </a>
        </div>
      </section>
    </div>
  );
};

export default Providers;