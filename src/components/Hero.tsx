import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 mx-0 my-[100px] py-[10px]">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">AB</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Salut, je suis{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              ALLAGLO Benicio
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in delay-200">
            Développeur Full Stack
          </p>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in delay-300">
            Passionné par la création d'expériences numériques exceptionnelles.
            Je transforme vos idées en solutions web innovantes et performantes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in delay-400">
            <button onClick={() => document.querySelector('#benicio')?.scrollIntoView({
            behavior: 'smooth'
          })} className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Voir mes projets
            </button>
            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({
            behavior: 'smooth'
          })} className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105">
              Me contacter
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in delay-500">
            <a href="https://github.com/codingtaker" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/benicio-allaglo" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="benicioallaglo@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button onClick={scrollToAbout} className="animate-bounce text-gray-400 hover:text-white transition-colors duration-200">
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>;
};
export default Hero;