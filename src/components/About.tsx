
import React from 'react';
import { Code, Palette, Smartphone, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Développement Web",
      description: "Applications web modernes avec React, Node.js et les dernières technologies"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design UI/UX",
      description: "Interfaces utilisateur intuitives et designs responsives"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile First",
      description: "Applications optimisées pour tous les appareils"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Solutions Complètes",
      description: "De la conception au déploiement, je gère tous les aspects"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              À propos de{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                moi
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Découvrez mon parcours et ma passion pour le développement web
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">Mon Histoire</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Développeur passionné en pleine évolution vers la Data Engineering, je renforce continuellement mes compétences en technologies web, data et systèmes intelligents à travers projets pratiques et formations ciblées. Mon objectif est d’apporter des solutions techniques robustes et évolutives. Je m’investis activement dans la transformation digitale et l’innovation au service des entreprises.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Mon approche combine expertise technique et créativité pour créer des 
                  expériences utilisateur exceptionnelles. Je suis constamment en veille 
                  technologique pour offrir les meilleures solutions à mes clients.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">Ma Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  Aider les entreprises et les particuliers à réaliser leur vision 
                  numérique en créant des solutions web performantes, accessibles et 
                  esthétiquement remarquables.
                </p>
              </div>
            </div>

            {/* Right Content - Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="text-blue-400 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
