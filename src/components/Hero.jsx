import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = [
    "Full Stack Developer",
    "MERN Stack Expert",
    "AI Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    const typeWriter = () => {
      const currentRole = roles[currentRoleIndex];
      let i = 0;
      const timer = setInterval(() => {
        if (i < currentRole.length) {
          setTypedText(currentRole.substring(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            setTypedText("");
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }, 2000);
        }
      }, 100);
    };

    typeWriter();
  }, [currentRoleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          {/* <img
            src="https://images.unsplash.com/photo-1494790108755-2616b612b1c0?w=200&h=200&fit=crop&crop=face"
            alt="Zoya Akhtar"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-400 shadow-2xl animate-pulse"
          /> */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-fade-in">
            Zoya Akhtar
          </h1>
          <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-12">
            {typedText}
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up">
            Passionate Computer Programmer and Full Stack Developer with
            hands-on experience in MERN stack development. Proven ability to
            build scalable, user-centric applications with 16+ live deployed
            projects across CRM systems, IoT, e-commerce, and AI-driven
            applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up">
          <a
            href="mailto:zoyaakhtar325@gmail.com"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Mail size={20} />
            Get In Touch
          </a>
          <a
            href="https://github.com/zoyakhtar8400"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/zoya-akhtar-1b28b5307"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>

        <div className="animate-bounce">
          <ChevronDown size={32} className="mx-auto text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
