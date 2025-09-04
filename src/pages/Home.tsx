import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Users, Heart, Baby, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { openWidgetOnce } from "../lib/botbly";
import BotblyNudge from "../components/BotblyNudge";

const Home: React.FC = () => {
  const { t } = useLanguage();

  const quickFacts = [
    {
      icon: <Users className="w-6 h-6" />,
      title: t('home.facts.newPatients'),
      description: 'Accepting new patients of all ages'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: t('home.facts.sameWeek'),
      description: 'Most appointments within the same week'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t('home.facts.telehealth'),
      description: 'Virtual visits for follow-ups and consultations'
    }
  ];

  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Primary Care',
      description: 'Comprehensive healthcare for adults, including preventive care, chronic disease management, and wellness visits.',
      link: '/services'
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: 'Pediatrics',
      description: 'Complete care for children from newborn to adolescence, including well-child visits and vaccinations.',
      link: '/services'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Women's Health",
      description: 'Specialized care for women including routine exams, contraception counseling, and prenatal coordination.',
      link: '/services'
    }
  ];

  function triggerWidgetAutoOpen(opts?: { delayMs?: number; disableOnMobile?: boolean }) {
    const delayMs = opts?.delayMs ?? 800;
    const disableOnMobile = opts?.disableOnMobile ?? true;
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (disableOnMobile && isMobile) return () => { };
    const id = window.setTimeout(() => { openWidgetOnce(true); }, delayMs);
    return () => window.clearTimeout(id);
  }

  useEffect(() => {
    return triggerWidgetAutoOpen({ delayMs: 800, disableOnMobile: true });
  }, []);

  return (
    <div className="bg-white">
      <BotblyNudge />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t('home.hero.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('home.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/appointments"
                  className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors duration-200 text-center"
                >
                  {t('common.requestAppointment')}
                </Link>
                <Link
                  to="/new-patients"
                  className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors duration-200 text-center"
                >
                  New Patient Info
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical professionals providing care"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickFacts.map((fact, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg mb-4 text-teal-600">
                  {fact.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{fact.title}</h3>
                <p className="text-gray-600">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Info */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Our Modern Clinic</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-teal-200" />
                  <span>{t('common.address')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-teal-200" />
                  <span>{t('common.hours')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal-200" />
                  <a href={`tel:${t('common.phone')}`} className="hover:text-teal-200 transition-colors">
                    {t('common.phone')}
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Located in Ashburn Village</h3>
              <p className="text-teal-100 mb-4">
                Conveniently located near Ashburn Village Center with ample surface parking on-site.
                Our facility is fully accessible with elevator access and wheelchair-friendly entrances.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-teal-200 hover:text-white transition-colors font-medium"
              >
                Get Directions
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Spotlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine check-ups to specialized care, our experienced team provides
              personalized treatment for patients of all ages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 group-hover:border-teal-200 h-full">
                  <div className="text-teal-600 mb-4 group-hover:scale-110 transition-transform duration-200">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link
                    to={service.link}
                    className="text-teal-600 font-medium hover:text-teal-700 transition-colors inline-flex items-center gap-2"
                  >
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Call us at <strong>{t('common.phone')}</strong> or email{' '}
            <a href={`mailto:appointments@willowcreekmed.example`} className="text-teal-600 font-medium">
              appointments@willowcreekmed.example
            </a>{' '}
            to request your visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${t('common.phone')}`}
              className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <Link
              to="/new-patients"
              className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors duration-200"
            >
              New Patient Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;