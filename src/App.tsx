import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import DemoBanner from './components/DemoBanner';
import Home from './pages/Home';
import Providers from './pages/Providers';
import Services from './pages/Services';
import NewPatients from './pages/NewPatients';
import PatientForms from './pages/PatientForms';
import Appointments from './pages/Appointments';
import Telehealth from './pages/Telehealth';
import Insurance from './pages/Insurance';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import FAQ from './pages/FAQ';
import Legal from './pages/Legal';
import { BotblyWidget } from "./components/BotblyWidget";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <DemoBanner />
          <BotblyWidget />
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/providers" element={<Providers />} />
              <Route path="/services" element={<Services />} />
              <Route path="/new-patients" element={<NewPatients />} />
              <Route path="/patient-forms" element={<PatientForms />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/telehealth" element={<Telehealth />} />
              <Route path="/insurance" element={<Insurance />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/legal" element={<Legal />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;