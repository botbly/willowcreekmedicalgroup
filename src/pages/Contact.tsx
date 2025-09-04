import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Accessibility, FileText } from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      primary: '(555) 018-4372',
      secondary: 'Main line for appointments and questions',
      action: 'tel:(555) 018-4372'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      primary: 'info@willowcreekmed.example',
      secondary: 'General inquiries and non-urgent questions',
      action: 'mailto:info@willowcreekmed.example'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Appointments',
      primary: 'appointments@willowcreekmed.example',
      secondary: 'Schedule requests and appointment changes',
      action: 'mailto:appointments@willowcreekmed.example'
    }
  ];

  const officeFeatures = [
    {
      icon: <Accessibility className="w-6 h-6 text-blue-600" />,
      title: 'Fully Accessible',
      description: 'Elevator access, wheelchair-friendly entrances, and service animals welcome'
    },
    {
      icon: <Car className="w-6 h-6 text-green-600" />,
      title: 'Free Parking',
      description: 'Ample surface parking available on-site with handicapped accessible spaces'
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-600" />,
      title: 'Large Print Materials',
      description: 'Large print forms and materials available upon request'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help with your healthcare needs. Reach out to us for 
              appointments, questions, or any assistance you may need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Get in Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-200">
                <div className="text-teal-600 mb-4 flex justify-center">
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{method.title}</h3>
                <a
                  href={method.action}
                  className="text-xl font-bold text-teal-600 hover:text-teal-700 transition-colors block mb-2"
                >
                  {method.primary}
                </a>
                <p className="text-gray-600 text-sm">{method.secondary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-teal-600" />
                <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-700">
                    44100 Ashburn Village Boulevard<br />
                    Suite 200<br />
                    Ashburn, VA 20147
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Landmark</h4>
                  <p className="text-gray-700">
                    Located near Ashburn Village Center with convenient access 
                    to shopping, dining, and public transportation.
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center border border-gray-200">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">Interactive map would be displayed here</p>
                  <p className="text-gray-400 text-xs">44100 Ashburn Village Blvd, Suite 200</p>
                </div>
              </div>
            </div>

            {/* Hours & Features */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Monday - Friday</span>
                    <span className="text-gray-700">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Saturday</span>
                    <span className="text-gray-700">8:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-900">Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Office Features</h3>
                <div className="space-y-4">
                  {officeFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      {feature.icon}
                      <div>
                        <h4 className="font-medium text-gray-900">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Directions & Parking
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-900 mb-4">From Washington DC Area</h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                Take I-66 West to Route 28 North (Exit 53). Continue on Route 28 North 
                for approximately 8 miles. Turn right onto Ashburn Village Boulevard. 
                The medical building will be on your left in Suite 200.
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-semibold text-green-900 mb-4">Parking Information</h3>
              <p className="text-green-800 text-sm leading-relaxed">
                Free surface parking is available directly in front of the building. 
                Handicapped accessible spaces are located near the main entrance. 
                The entrance is clearly marked and wheelchair accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Connect?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Our team is standing by to help with appointments, questions, and any healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(555) 018-4372"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="mailto:info@willowcreekmed.example"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors duration-200 inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;