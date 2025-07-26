import { Github } from "lucide-react";

const Projects = () => {
  const featuredProjects = [
    {
      title: "MoodFood AI Chatbot",
      tech: "NLP • ML • React.js • API Integration",
      description:
        "AI-powered chatbot that recommends food based on user mood using custom NLP system.",
      features: [
        "Mood analysis",
        "Conversational interface",
        "Personalized recommendations",
      ],
      category: "AI/ML",
    },
    {
      title: "Buddha CRM System",
      tech: "MERN Stack • Firebase • ReactWebCam",
      description:
        "Complete banquet & service management platform with staff task management.",
      features: [
        "Room booking",
        "Task management",
        "Real-time updates",
        "Cloud integration",
      ],
      category: "Full-Stack",
    },
    {
      title: "DirtOff Laundry CRM",
      tech: "MERN Stack • API Integration",
      description:
        "Robust CRM system for managing laundry service workflows with admin panel.",
      features: [
        "Customer management",
        "Order tracking",
        "Invoice generation",
        "Scanner tags",
      ],
      category: "Full-Stack",
    },
    {
      title: "Glitzzera Jewelry Store",
      tech: "MERN Stack • E-commerce",
      description:
        "Modern jewelry e-commerce platform with elegant design and user experience.",
      features: [
        "Product catalog",
        "Wishlist system",
        "User authentication",
        "Shopping cart",
      ],
      category: "E-commerce",
    },
    {
      title: "DinnerBell Food Delivery",
      tech: "MERN Stack • Real-time tracking",
      description: "Gorakhpur's first hybrid dining + food delivery platform.",
      features: [
        "Restaurant listings",
        "Live order tracking",
        "Table reservations",
      ],
      category: "Full-Stack",
    },
    {
      title: "RFID Attendance System",
      tech: "ESP32 • Arduino • Node.js • MongoDB",
      description:
        "IoT-based real-time attendance system with hardware-software integration.",
      features: ["Real-time tracking", "Hardware integration", "API endpoints"],
      category: "IoT",
    },
    {
      title: "Tech Guard SHE",
      tech: "MERN Stack • Location Services",
      description:
        "Women safety platform with SOS alerts and real-time location tracking.",
      features: ["Emergency alerts", "GPS tracking", "Volunteer network"],
      category: "Social Impact",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          16+ Live Deployed Projects (MERN Stack & Advanced Technologies Only)
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-sm text-purple-400 mb-3 font-mono">
                  {project.tech}
                </p>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-400">
                    Key Features:
                  </p>
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            And many more MERN stack projects including IoT solutions and
            advanced web applications!
            <br />
            <span className="text-sm italic">
              *HTML/CSS/JavaScript static projects not included in showcase
            </span>
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
