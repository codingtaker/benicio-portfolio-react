
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/codingtaker",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/benicio-allaglo",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:benicioallaglo@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { href: '#home', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Compétences' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900/90 backdrop-blur-sm border-t border-slate-800/50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  ALLAGLO Benicio
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Développeur Full Stack passionné par la création d'expériences 
                numériques exceptionnelles et de solutions web innovantes.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    className="p-2 bg-slate-800/50 text-gray-400 hover:text-blue-400 hover:bg-slate-700/50 rounded-lg transition-all duration-200 transform hover:scale-110"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Navigation</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>📧  benicioallaglo@gmail.com</p>
                <p>📱 +228 70 51 88 57</p>
                <p>📍 Lomé, Togo</p>
              </div>
              <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/30">
                <p className="text-sm text-gray-300">
                  <strong className="text-green-400">Disponible</strong> pour de nouveaux projets
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-slate-800/50">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm text-center md:text-left">
                <p>
                  © {currentYear} ALLAGLO Benicio. Tous droits réservés.
                </p>
              </div>
              
              <div className="flex items-center space-x-1 text-gray-400 text-sm">
                <span>Fait avec</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>et beaucoup de ☕</span>
              </div>
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={() => scrollToSection('#home')}
            className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
            aria-label="Retour en haut"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
