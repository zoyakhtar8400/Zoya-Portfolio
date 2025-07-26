import { Github, ExternalLink, Calendar } from "lucide-react";

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
      demoUrl: "#",
      githubUrl: "#",
      status: "Live",
      year: "July-2025",
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
      demoUrl: "#",
      githubUrl: "#",
      status: "Live",
      year: "July-2025",
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
      demoUrl: "#",
      githubUrl: "#",
      status: "Live",
      year: "May-2025",
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
      demoUrl: "#",
      githubUrl: "#",
      status: "Live",
      year: "July-2025",
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
      demoUrl: "#",
      githubUrl: "#",
      status: "Live",
      year: "April-2025",
    },
    {
      title: "RFID Attendance System",
      tech: "ESP32 • Arduino • Node.js • MongoDB",
      description:
        "IoT-based real-time attendance system with hardware-software integration.",
      features: ["Real-time tracking", "Hardware integration", "API endpoints"],
      category: "IoT",
      demoUrl: "#",
      githubUrl: "#",
      status: "Live",
      year: "June-2025",
    },
    {
      title: "Tech Guard SHE",
      tech: "MERN Stack • Location Services",
      description:
        "Women safety platform with SOS alerts and real-time location tracking.",
      features: ["Emergency alerts", "GPS tracking", "Volunteer network"],
      category: "Social Impact",
      demoUrl: "#",
      githubUrl: "#",
      status: "Live",
      year: "2024-2025",
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
              className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-[1.02] group animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar size={12} />
                    {project.year}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.split(" • ").map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-xs px-2 py-1 bg-gray-800/50 text-gray-300 rounded border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Content */}
              <div className="px-6 pb-4">
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    Key Features
                  </p>
                  <div className="grid grid-cols-1 gap-1">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                        <span className="text-xs text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
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
            href="@"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 font-semibold"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
