
import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "fullstack",
      description: "Plateforme e-commerce complète avec panier, paiement et gestion des commandes",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      category: "frontend",
      description: "Dashboard interactif avec graphiques et métriques en temps réel",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["React", "Chart.js", "Tailwind", "API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "API Restaurant",
      category: "backend",
      description: "API REST pour gestion de restaurant avec authentification JWT",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Mobile App UI",
      category: "design",
      description: "Design d'interface pour application mobile de fitness",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      technologies: ["Figma", "UI/UX", "Prototyping"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Social Network",
      category: "fullstack",
      description: "Réseau social avec chat en temps réel et partage de contenu",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "frontend",
      description: "Site portfolio responsive avec animations et optimisations SEO",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["React", "Tailwind", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'design', label: 'Design' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mon{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Découvrez une sélection de mes projets les plus récents et impactants
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200"
                        title="Voir le projet"
                      >
                        <Eye size={16} />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-slate-700 text-white rounded-full hover:bg-slate-600 transition-colors duration-200"
                        title="Code source"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">
              Vous avez un projet en tête ? Discutons-en !
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Démarrer un projet
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
