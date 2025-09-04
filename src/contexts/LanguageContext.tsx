import React, { createContext, useContext, ReactNode } from 'react';

interface LanguageContextType {
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

const translations = {
  // Navigation
  'nav.home': 'Home',
  'nav.providers': 'Providers',
  'nav.services': 'Services',
  'nav.newPatients': 'New Patients',
  'nav.appointments': 'Appointments',
  'nav.insurance': 'Insurance',
  'nav.contact': 'Contact',
  'nav.callToRequest': 'Call to Request Appointment',
  
  // Common
  'common.phone': '(555) 018-4372',
  'common.email': 'info@willowcreekmed.example',
  'common.address': '44100 Ashburn Village Boulevard Suite 200, Ashburn, VA 20147',
  'common.hours': 'Mon-Fri: 8 AM - 5 PM | Sat: 8 AM - 1 PM | Sun: Closed',
  'common.requestAppointment': 'Request an Appointment',
  
  // Home page
  'home.hero.title': 'Compassionate care for every stage of life',
  'home.hero.subtitle': 'Comprehensive medical care for families in Ashburn, Virginia',
  'home.facts.newPatients': 'New Patients Welcome',
  'home.facts.sameWeek': 'Same Week Availability',
  'home.facts.telehealth': 'Select Telehealth Services',
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const t = (key: string): string => {
    return translations[key as keyof typeof translations] || key;
  };

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};