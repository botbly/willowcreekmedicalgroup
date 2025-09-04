import React from 'react';
import { Scale, Shield, Eye, FileText } from 'lucide-react';

const Legal: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Legal Information
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Terms of use, accessibility information, and important disclaimers 
              for the Willow Creek Medical Group website.
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Use */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Terms of Use</h2>
            </div>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Acceptance of Terms</h3>
                <p className="leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Use of Content</h3>
                <p className="leading-relaxed">
                  The content of this website is for informational purposes only and is the property 
                  of Willow Creek Medical Group. You may view, download, and print materials from 
                  this site for personal, non-commercial use only. Reproduction or distribution 
                  of content for commercial purposes is prohibited without written permission.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Modifications</h3>
                <p className="leading-relaxed">
                  Willow Creek Medical Group reserves the right to modify these terms at any time. 
                  Changes will be posted on this page with an updated effective date. 
                  Your continued use of the website constitutes acceptance of any modifications.
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Copyright Notice</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                © 2025 Willow Creek Medical Group. All rights reserved. The content, design, 
                and layout of this website are protected by copyright, trademark, and other 
                intellectual property laws.
              </p>
              
              <p className="leading-relaxed">
                Unauthorized reproduction, modification, distribution, or republication of any 
                materials on this site is strictly prohibited. The Willow Creek Medical Group 
                name and logo are trademarks of Willow Creek Medical Group.
              </p>
            </div>
          </div>

          {/* Accessibility Statement */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">Accessibility Statement</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Willow Creek Medical Group is committed to ensuring digital accessibility for 
                people with disabilities. We continually improve the user experience for everyone 
                and apply relevant accessibility standards.
              </p>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Accessibility Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Semantic HTML structure for screen readers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Sufficient color contrast ratios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Keyboard navigation support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Alternative text for images</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Form labels and error messages</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Request Accommodations</h3>
                <p className="leading-relaxed">
                  If you encounter accessibility barriers on our website or need accommodations 
                  for your visit, please contact us at <strong>(555) 018-4372</strong> or{' '}
                  <a href="mailto:accessibility@willowcreekmed.example" className="text-teal-600 hover:text-teal-700">
                    accessibility@willowcreekmed.example
                  </a>. We will work with you to provide the information or service in an accessible format.
                </p>
              </div>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-amber-600" />
              <h2 className="text-2xl font-bold text-amber-900">Medical Disclaimer</h2>
            </div>
            
            <div className="space-y-4 text-amber-800">
              <p className="leading-relaxed font-medium">
                Important: This website is for informational purposes only and is not a substitute 
                for professional medical advice, diagnosis, or treatment.
              </p>
              
              <p className="leading-relaxed">
                The information provided on this website should not be used for diagnosing or 
                treating a health problem or disease. Always seek the advice of your physician 
                or other qualified healthcare provider with any questions you may have regarding 
                a medical condition.
              </p>
              
              <p className="leading-relaxed">
                Never disregard professional medical advice or delay seeking treatment because 
                of something you have read on this website. If you think you may have a medical 
                emergency, call 911 or your doctor immediately.
              </p>
              
              <p className="leading-relaxed">
                Willow Creek Medical Group does not recommend or endorse any specific tests, 
                physicians, products, procedures, opinions, or other information that may be 
                mentioned on this website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Legal */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Legal Questions or Concerns?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact our administrative team for questions about terms of use, 
            accessibility accommodations, or other legal matters.
          </p>
          <a
            href="mailto:legal@willowcreekmed.example"
            className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors duration-200"
          >
            Contact Legal Department
          </a>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-sm">
            This page was last updated on January 1, 2025. Terms and policies may be 
            revised periodically. Please check this page for the most current information.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Legal;