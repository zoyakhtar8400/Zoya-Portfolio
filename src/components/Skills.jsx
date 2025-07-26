import { 
  SiReact, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, 
  SiMongodb, SiMysql, SiFirebase,
  SiGit, SiGithub, SiPostman,
  SiC, SiArduino, SiVercel
} from 'react-icons/si';
import { Code, Server, Database, Smartphone } from 'lucide-react';

const Skills = () => {
  const skills = {
    frontend: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' }
    ],
    backend: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' }
    ],
    database: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' }
    ],
    tools: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'VS Code', icon: Code, color: '#007ACC' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Arduino', icon: SiArduino, color: '#00979D' },
      { name: 'ESP32', icon: Smartphone, color: '#E7352C' },
      { name: 'Vercel', icon: SiVercel, color: '#000000' }
    ],
    languages: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'C', icon: SiC, color: '#A8B9CC' }
    ]
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-purple-400" size={32} />
              <h3 className="text-2xl font-semibold">Frontend</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {skills.frontend.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={index} className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                    <IconComponent 
                      size={32} 
                      style={{ color: skill.color }}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-xs text-gray-300 text-center">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Server className="text-pink-400" size={32} />
              <h3 className="text-2xl font-semibold">Backend</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {skills.backend.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={index} className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                    <IconComponent 
                      size={32} 
                      style={{ color: skill.color }}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-xs text-gray-300 text-center">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Database className="text-blue-400" size={32} />
              <h3 className="text-2xl font-semibold">Database</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {skills.database.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={index} className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                    <IconComponent 
                      size={32} 
                      style={{ color: skill.color }}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-xs text-gray-300 text-center">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Smartphone className="text-green-400" size={32} />
              <h3 className="text-2xl font-semibold">Tools</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {skills.tools.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={index} className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                    <IconComponent 
                      size={32} 
                      style={{ color: skill.color }}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-xs text-gray-300 text-center">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 animate-fade-in md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-yellow-400" size={32} />
              <h3 className="text-2xl font-semibold">Languages</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {skills.languages.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={index} className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                    <IconComponent 
                      size={32} 
                      style={{ color: skill.color }}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-xs text-gray-300 text-center">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;