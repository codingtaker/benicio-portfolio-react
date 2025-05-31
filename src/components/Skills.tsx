
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 45 },
        { name: "TypeScript", level: 20 },
        { name: "Tailwind CSS", level: 12 },
        { name: "Next.js", level: 18 },
        { name: "Vue.js", level: 10 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 55 },
        { name: "Express.js", level: 88 },
        { name: "MongoDB", level: 72 },
        { name: "PostgreSQL", level: 10 }
      ]
    },
    {
      title: "Outils & DevOps",
      skills: [
        { name: "Git", level: 75 },
        { name: "Docker", level: 15 },
        { name: "AWS", level: 12 },
        { name: "CI/CD", level: 12 },
        { name: "Linux", level: 18 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mes{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Compétences
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies et outils que je maîtrise pour créer des solutions exceptionnelles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animation: `slideIn 1s ease-out ${skillIndex * 0.1}s both`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Cloud */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Technologies Additionnelles</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'JavaScript', 'HTML5', 'CSS3', 'Sass', 'GraphQL', 'REST API',
                'Firebase', 'Vercel', 'Netlify', 'Figma', 'Adobe XD', 'Photoshop'
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-full text-sm border border-slate-600/50 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
