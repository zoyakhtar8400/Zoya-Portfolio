import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 animate-slide-left">
            <Mail className="text-purple-400 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-semibold mb-4">Email</h3>
            <a href="mailto:zoyaakhtar325@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">
              zoyaakhtar325@gmail.com
            </a>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 animate-slide-right">
            <Phone className="text-purple-400 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-semibold mb-4">Phone</h3>
            <a href="tel:+918400585115" className="text-gray-300 hover:text-purple-400 transition-colors">
              +91 8400585115
            </a>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 animate-slide-up">
          <a
            href="https://github.com/zoyakhtar8400"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Github size={24} />
            <span>GitHub</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/zoya-akhtar-1b28b5307"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
          
          <a
            href="mailto:zoyaakhtar325@gmail.com"
            className="flex items-center gap-3 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Mail size={24} />
            <span>Email Me</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;