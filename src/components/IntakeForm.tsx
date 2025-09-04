import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  // Demographics
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  emergencyContact: string;
  emergencyPhone: string;
  
  // Insurance
  insurancePayer: string;
  planId: string;
  groupNumber: string;
  primaryInsured: string;
  relationship: string;
  
  // Medical History
  conditions: string;
  surgeries: string;
  hospitalizations: string;
  familyHistory: string;
  allergies: string;
  medications: string;
  pharmacy: string;
  
  // Social History
  tobacco: string;
  alcohol: string;
  occupation: string;
  exercise: string;
  
  // Visit Information
  primaryCare: string;
  reasonForVisit: string;
  symptomOnset: string;
  preferredLanguage: string;
  interpreterNeeded: boolean;
  accessibilityNeeds: string;
}

const IntakeForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: 'VA',
    zipCode: '',
    phone: '',
    email: '',
    emergencyContact: '',
    emergencyPhone: '',
    insurancePayer: '',
    planId: '',
    groupNumber: '',
    primaryInsured: '',
    relationship: '',
    conditions: '',
    surgeries: '',
    hospitalizations: '',
    familyHistory: '',
    allergies: '',
    medications: '',
    pharmacy: '',
    tobacco: '',
    alcohol: '',
    occupation: '',
    exercise: '',
    primaryCare: '',
    reasonForVisit: '',
    symptomOnset: '',
    preferredLanguage: 'English',
    interpreterNeeded: false,
    accessibilityNeeds: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const validateForm = (): string[] => {
    const newErrors: string[] = [];
    
    if (!formData.firstName.trim()) newErrors.push('First name is required');
    if (!formData.lastName.trim()) newErrors.push('Last name is required');
    if (!formData.dateOfBirth) newErrors.push('Date of birth is required');
    if (!formData.phone.trim()) newErrors.push('Phone number is required');
    if (!formData.email.trim()) newErrors.push('Email address is required');
    if (!formData.address.trim()) newErrors.push('Address is required');
    if (!formData.reasonForVisit.trim()) newErrors.push('Reason for visit is required');
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors([]);
    setIsSubmitted(true);
    
    // In a real implementation, this would email the form data to the clinic
    console.log('Form submitted:', formData);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Form Submitted Successfully!</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Thank you for completing your intake form. Your information has been received. 
          Please call <strong>(555) 018-4372</strong> to schedule your appointment.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-blue-800 text-sm">
            <strong>Next Step:</strong> Call our office during business hours to request your appointment. 
            Our staff will work with you to find a convenient time that matches your schedule and your provider's availability.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <h3 className="font-semibold text-red-900">Please correct the following:</h3>
          </div>
          <ul className="list-disc list-inside text-red-700 text-sm space-y-1">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Demographics */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Birth *
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(555) 123-4567"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address *
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City *
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State
            </label>
            <select
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="VA">Virginia</option>
              <option value="MD">Maryland</option>
              <option value="DC">Washington DC</option>
            </select>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Emergency Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Emergency Contact Name
            </label>
            <input
              type="text"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Emergency Contact Phone
            </label>
            <input
              type="tel"
              name="emergencyPhone"
              value={formData.emergencyPhone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Medical History */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Medical History</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Medical Conditions
            </label>
            <textarea
              name="conditions"
              value={formData.conditions}
              onChange={handleInputChange}
              rows={3}
              placeholder="List any current medical conditions, diagnoses, or ongoing health issues"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Medications & Supplements
            </label>
            <textarea
              name="medications"
              value={formData.medications}
              onChange={handleInputChange}
              rows={3}
              placeholder="Include dosage and frequency for each medication"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Allergies (Medications, Foods, Environmental)
            </label>
            <textarea
              name="allergies"
              value={formData.allergies}
              onChange={handleInputChange}
              rows={2}
              placeholder="List all known allergies and reactions"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Visit Information */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Visit Information</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reason for Visit *
            </label>
            <textarea
              name="reasonForVisit"
              value={formData.reasonForVisit}
              onChange={handleInputChange}
              rows={3}
              placeholder="Please describe the main reason for your visit"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Language
              </label>
              <select
                name="preferredLanguage"
                value={formData.preferredLanguage}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Accessibility Needs
              </label>
              <input
                type="text"
                name="accessibilityNeeds"
                value={formData.accessibilityNeeds}
                onChange={handleInputChange}
                placeholder="Any special accommodations needed"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-teal-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors duration-200"
        >
          Submit Intake Form
        </button>
        <p className="text-sm text-gray-600 mt-4">
          After submitting, please call <strong>(555) 018-4372</strong> to schedule your appointment.
        </p>
      </div>
    </form>
  );
};

export default IntakeForm;