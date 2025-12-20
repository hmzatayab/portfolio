import { memo } from "react";
import { Background } from "../Background";
import {
  ChevronDown,
  Dribbble,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Send,
} from "lucide-react";

export const Contact = memo(() => {
  return (
    <section
      id="contact"
      className="relative z-10 py-24 bg-neutral-950 overflow-hidden border-t border-white/5"
    >
      <Background />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                Get In Touch
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                Let's Work <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                  Together.
                </span>
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed max-w-md">
                If you have an amazing project idea or just want to say 'Hi',
                feel free to connect. I’m always ready for new challenges.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:hmzatayab@gmail.com"
                className="cursor-pointer group flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-purple-600 transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider">
                    Email Me
                  </p>
                  <p className="text-lg font-medium text-white">
                    hmzatayab@gmail.com
                  </p>
                </div>
              </a>

              <div className="group flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-lg font-medium text-white">
                    Walton Road Lahore Cantt, Pakistan 54000
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-pink-600 transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="text-lg font-medium text-white">
                    +92 320 4108187
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {[
                {
                  icon: <Instagram />,
                  href: "https://www.instagram.com/hmzatayab",
                },
                {
                  icon: <Dribbble />,
                  href: "https://www.behance.net/humza_official",
                },
                {
                  icon: <Linkedin />,
                  href: "https://www.linkedin.com/in/humza-rajput/",
                },
                { icon: <Monitor />, href: "https://linktr.ee/hamzatayyab" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] relative">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/30 rounded-full blur-[50px] pointer-events-none"></div>

            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Hamza Tayyab"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider ml-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="hmzatayab@gmail.com"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider ml-1">
                  Subject
                </label>
                <div className="relative group">
                  <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 pr-10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 hover:border-white/20 transition-all duration-300 appearance-none cursor-pointer backdrop-blur-sm">
                    <option className="bg-neutral-900">Project Inquiry</option>
                    <option className="bg-neutral-900">Collaboration</option>
                    <option className="bg-neutral-900">Freelance Work</option>
                    <option className="bg-neutral-900">Just Saying Hi</option>
                  </select>
                  <ChevronDown
                    size={20}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none transition-transform duration-300 group-hover:text-purple-400 group-focus-within:rotate-180 group-focus-within:text-purple-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider ml-1">
                  Message
                </label>
                <textarea
                  rows="10"
                  placeholder="Tell me about your project..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full py-4 rounded-xl bg-linear-to-r from-purple-600 to-blue-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full opacity-50 animate-spin-slow duration-[20s]"></div>
    </section>
  );
});
