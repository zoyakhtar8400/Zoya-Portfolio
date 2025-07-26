import { GraduationCap, MapPin, Star } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-left">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a{" "}
                <span className="text-white font-semibold">
                  Full Stack Developer
                </span>{" "}
                who transforms complex business requirements into elegant,
                user-friendly digital experiences. Specializing in{" "}
                <span className="text-purple-400 font-semibold">
                  React.js and MERN stack
                </span>
                , I've successfully delivered{" "}
                <span className="text-pink-400 font-bold">
                  {" "}
                  production-ready applications
                </span>{" "}
                that serve real users and solve real problems.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                My expertise spans from crafting{" "}
                <span className="text-blue-400 font-semibold">
                  pixel-perfect frontend interfaces
                </span>{" "}
                to architecting robust backend systems. I thrive on building
                applications that not only look stunning but also deliver
                exceptional performance and seamless user experiences.
              </p>
              <p className="text-lg text-gray-300">
                With a{" "}
                <span className="text-green-400 font-semibold">
                  Computer Science Engineering degree
                </span>{" "}
                and proven industry experience, I combine strong technical
                fundamentals with practical expertise to create innovative
                solutions that make a difference.
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-slide-right">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-purple-400" size={24} />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-purple-400 pl-4">
                  <p className="text-gray-300 font-medium text-lg">
                    B.Tech Computer Science And Engineering
                  </p>
                  <p className="text-gray-400 text-sm">
                    Buddha Institute of Technology (2021-2025)
                  </p>
                  <p className="text-purple-400 font-semibold">
                    CGPA: 7.6 | Latest SGPA: 9.0
                  </p>
                </div>
                <div className="border-l-2 border-pink-400 pl-4">
                  <p className="text-gray-300 font-medium text-lg">
                    12th Grade (PCM)
                  </p>
                  <p className="text-gray-400 text-sm">CBSE Board (2021)</p>
                  <p className="text-pink-400 font-semibold">
                    Percentage: 67.9%
                  </p>
                </div>
                <div className="border-l-2 border-blue-400 pl-4">
                  <p className="text-gray-300 font-medium text-lg">
                    10th Grade
                  </p>
                  <p className="text-gray-400 text-sm">CBSE Board (2019)</p>
                  <p className="text-blue-400 font-semibold">
                    Percentage: 67.9%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-purple-400" size={24} />
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <p className="text-gray-300">Gorakhpur, Uttar Pradesh, India</p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Star className="text-purple-400" size={24} />
                <h3 className="text-xl font-semibold">Achievement</h3>
              </div>
              <p className="text-gray-300">
                "Intern of the Month" at Shine Infosolution
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
