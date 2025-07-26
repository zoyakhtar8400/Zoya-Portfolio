import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  User,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in">
          Ready to bring your ideas to life? Let's discuss your next project and
          create something amazing together.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 animate-slide-left">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <MessageSquare className="text-purple-400" size={28} />
              Send Message
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-3 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-400"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-3 text-gray-400"
                    size={20}
                  />
                  <input
                    type="email"
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-400 focus:outline-none text-white">
                  <option value="" className="bg-gray-800">
                    Select project type
                  </option>
                  <option value="web-development" className="bg-gray-800">
                    Web Development
                  </option>
                  <option value="full-stack" className="bg-gray-800">
                    Full Stack Application
                  </option>
                  <option value="frontend" className="bg-gray-800">
                    Frontend Development
                  </option>
                  <option value="consultation" className="bg-gray-800">
                    Technical Consultation
                  </option>
                  <option value="other" className="bg-gray-800">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 font-semibold"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-right">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
              <Mail className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a
                href="mailto:zoyaakhtar325@gmail.com"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                zoyaakhtar325@gmail.com
              </a>
              <p className="text-sm text-gray-400 mt-2">
                Best way to reach me for projects
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
              <MapPin className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Gorakhpur, Uttar Pradesh, India</p>
              <p className="text-sm text-gray-400 mt-2">
                Available for remote work worldwide
              </p>
            </div>

            {/* <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Response Time</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Email:</span>
                  <span className="text-green-400">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Project Quotes:</span>
                  <span className="text-blue-400">1-2 business days</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="text-center animate-slide-up">
          <p className="text-gray-400 mb-6">
            Or connect with me on social platforms
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gray-800/80 hover:bg-gray-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-gray-600"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/zoya-akhtar-1b28b5307"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-600/80 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 border border-blue-500 hover:border-blue-400"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
