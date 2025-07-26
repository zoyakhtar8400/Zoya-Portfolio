import { Calendar, Award } from 'lucide-react';

const Experience = () => {
  const experience = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Shine Infosolution',
      period: 'April 2024 - Present',
      achievements: [
        'Recognized as "Intern of the Month" for outstanding performance',
        'Built full-stack applications using React.js, Node.js, and MongoDB',
        'Developed reusable components and integrated RESTful APIs'
      ]
    },
    {
      title: 'Web Development Intern',
      company: 'Techpile Technologies Pvt. Ltd.',
      period: 'May 2024 - July 2024',
      achievements: [
        'Developed responsive websites using MERN stack',
        'Participated in Agile development cycles',
        'Enhanced site performance and maintainability'
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                  <p className="text-xl text-purple-400">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                  <Calendar size={20} />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 animate-fade-in">
            <Award className="text-yellow-400 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-semibold mb-4">Recognition</h3>
            <p className="text-lg text-gray-300">
              "Intern of the Month" at Shine Infosolution for outstanding performance and delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;