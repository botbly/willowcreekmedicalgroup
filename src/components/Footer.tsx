import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { name: 'Services', href: '/services' },
    { name: 'New Patients', href: '/new-patients' },
    { name: 'Appointments', href: '/appointments' },
    { name: 'Insurance', href: '/insurance' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Legal', href: '/legal' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Willow Creek Medical Group</h3>
                <p className="text-gray-400 text-sm">Compassionate care for every stage of life</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-teal-400" />
                <span className="text-sm">{t('common.address')}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-teal-400" />
                <a href={`tel:${t('common.phone')}`} className="text-sm hover:text-white transition-colors">
                  {t('common.phone')}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-teal-400" />
                <a href={`mailto:${t('common.email')}`} className="text-sm hover:text-white transition-colors">
                  {t('common.email')}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-teal-400" />
                <span className="text-sm">{t('common.hours')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Additional Info</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/telehealth" className="hover:text-white transition-colors">
                  Telehealth
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition-colors">
                  Patient Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Willow Creek Medical Group. All rights reserved.
            </p>
            <div className="text-gray-400 text-sm">
              Serving Ashburn, VA and surrounding communities
            </div>
          </div>
        </div>
      </div>

      {/* BotBly Promotion Bar */}
     <div className="fixed inset-x-0 bottom-0 z-50 bg-amber-100 border-t border-teal-700/60 pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-teal-900 text-center text-base sm:text-lg">
          <span className="font-medium">
            Explore how a Virtual Assistant elevates customer service and conversions. Presented by
          </span>
          <a
            href="https://botbly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md px-2 py-1 bg-white/10 hover:bg-teal-900/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-700 transition"
          >
            <span className="font-bold tracking-wide">BotBly</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;