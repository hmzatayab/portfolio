import React, { useState, useEffect, useCallback, memo } from "react";
import profileImage from "./assets/hamza.png";
import {
  Menu,
  X,
  ArrowRight,
  Instagram,
  Dribbble,
  Linkedin,
  Mail,
  Palette,
  Layers,
  PenTool,
  MousePointer2,
  Wand2,
  Image as ImageIcon,
  Monitor,
  Smartphone,
  Layout,
  Code2,
  Rocket,
  Eye,
  ExternalLink,
  MapPin,
  Phone,
  Send,
  ChevronDown,
} from "lucide-react";

const GlobalStyles = memo(() => (
  <style>{`
    @keyframes float-slow {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes float-medium {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(5deg); }
    }
    @keyframes float-fast {
      0%, 100% { transform: translateY(0px) scale(1); }
      50% { transform: translateY(-10px) scale(1.05); }
    }
    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.2); }
      50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.5); }
    }
    .animate-float-slow { animation: float-slow 6s ease-in-out infinite; will-change: transform; }
    .animate-float-medium { animation: float-medium 5s ease-in-out infinite; will-change: transform; }
    .animate-float-fast { animation: float-fast 4s ease-in-out infinite; will-change: transform; }
    .animate-pulse-glow { animation: pulse-glow 3s infinite; }
  `}</style>
));

const Hero = memo(({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute top-1/5 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none select-none overflow-hidden">
        <span className="text-[12rem] md:text-[20rem] font-black text-white/2 leading-none tracking-tighter will-change-transform">
          CREATIVE
        </span>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-0 w-[600px] h-[600px] rounded-full blur-[120px] mix-blend-screen animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto py-10 px-6 grid lg:grid-cols-2 gap-8 items-center relative z-10">
        <div className="space-y-8 z-20 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/50 border border-white/10 backdrop-blur-md animate-in slide-in-from-left duration-700">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold tracking-wide text-neutral-300 uppercase">
              Open for new projects
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-non tracking-tight">
            Crafting Visual <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-blue-400">
                Stories
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-purple-500/30 -skew-x-12 blur-sm"></div>
            </span>{" "}
            <br />
            That Inspire.
          </h1>

          <p className="text-xl text-neutral-400 max-w-xl leading-relaxed border-l-4 border-purple-500/50 pl-6">
          I create visual stories. From websites to brand identity, every design is driven by purpose and innovation.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="px-10 py-4 bg-linear-to-r from-purple-600 to-blue-600 rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(124,58,237,0.4)] transition-all transform hover:-translate-y-1 flex items-center gap-2 group cursor-pointer"
            >
              View My Work
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-10 py-4 bg-neutral-900 border border-white/10 rounded-full font-bold text-lg hover:bg-white/5 hover:border-white/30 transition-all cursor-pointer"
            >
              Contact Me
            </button>
          </div>

          <div className="flex items-center gap-8 pt-8 opacity-80">
            <div>
              <h4 className="text-3xl font-bold text-white">6+</h4>
              <p className="text-xs text-neutral-500 uppercase tracking-wider">
                Years Exp.
              </p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div>
              <h4 className="text-3xl font-bold text-white">50+</h4>
              <p className="text-xs text-neutral-500 uppercase tracking-wider">
                Projects Done
              </p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-neutral-800 border-2 border-neutral-950 flex items-center justify-center text-[10px] text-neutral-500"
                >
                  User
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative h-[600px] flex items-center justify-center z-10 lg:-ml-10">
          <div className="relative w-[380px] md:w-[480px] h-[550px]">
            <div className="absolute inset-0 bg-linear-to-tr from-purple-600 to-blue-600 rounded-4xl blur-3xl opacity-30 animate-pulse-glow will-change-transform"></div>

            <div className="relative w-full h-full rounded-4xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-700 will-change-transform">
              <img
                src={profileImage}
                alt="Designer Portrait"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-neutral-950 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl">
                <p className="text-xs font-semibold text-purple-400 mb-1">
                  Graphic Designer & UI Artist
                </p>
                <h3 className="text-xl font-bold text-white">Hamza Tayyab</h3>
              </div>
            </div>

            <div className="absolute -top-6 -right-12 p-4 bg-neutral-800/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl animate-float-slow flex gap-2 z-20">
              <div className="w-5 h-5 rounded-full bg-cyan-400"></div>
              <div className="w-5 h-5 rounded-full bg-purple-500"></div>
              <div className="w-5 h-5 rounded-full bg-pink-500"></div>
            </div>

            <div className="absolute -bottom-8 -left-12 p-5 bg-neutral-900 border border-white/10 rounded-2xl shadow-xl animate-float-medium flex items-center gap-3 z-20">
              <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400">
                <PenTool size={24} />
              </div>
              <div>
                <p className="text-xs text-neutral-400">Tool</p>
                <p className="text-sm font-bold">Vector Art</p>
              </div>
            </div>

            <div className="absolute top-1/2 -right-16 p-4 bg-neutral-900 border border-white/10 rounded-xl shadow-xl animate-float-fast delay-700 z-20">
              <Layers className="text-blue-400" size={28} />
            </div>

            <div className="absolute top-12 -left-10 p-3 bg-white text-black rounded-lg shadow-xl animate-float-slow delay-300 transform -rotate-12 z-20">
              <MousePointer2 size={24} fill="currentColor" />
              <div className="absolute top-full left-0 bg-white text-[10px] font-bold px-2 py-0.5 rounded mt-1">
                Me
              </div>
            </div>

            <div className="absolute top-4 right-1/2 text-yellow-400 animate-spin-slow opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
});

const Services = memo(() => {
  const servicesList = [
    {
      title: "Brand Identity",
      desc: "Logos, color palettes, and visual guidelines that make your brand unique.",
      icon: <Palette size={28} />,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "UI/UX Design",
      desc: "Clean, modern, and user-friendly interfaces for websites and mobile apps.",
      icon: <Layout size={28} />,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Social Media",
      desc: "Engaging posts and banners for Instagram and LinkedIn that grab attention.",
      icon: <ImageIcon size={28} />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Vector Art",
      desc: "Custom illustrations and vector graphics that take your content to the next level.",
      icon: <PenTool size={28} />,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section
      id="services"
      className="relative z-10 py-24 bg-neutral-950 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="px-3 py-1 text-xs font-bold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400 uppercase">
              My Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Crafting Digital <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400">
              Experiences
            </span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
          I don’t just create designs; I tell brand stories through visual language. Every pixel reflects innovation and detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="group relative p-1 rounded-3xl bg-linear-to-b from-white/10 to-white/5 hover:from-purple-500/50 hover:to-blue-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="h-full bg-neutral-900/90 backdrop-blur-xl rounded-[1.3rem] p-8 flex flex-col relative overflow-hidden">
                <div className="absolute -right-4 -bottom-8 text-[8rem] font-bold text-white/2 group-hover:text-white/5 transition-colors select-none leading-none z-0">
                  0{index + 1}
                </div>
                <div
                  className={`w-14 h-14 rounded-2xl bg-linear-to-br ${service.color} p-0.5 mb-6 shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="w-full h-full bg-black/20 backdrop-blur-sm rounded-[14px] flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-neutral-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 border-l-2 border-white/5 pl-4 group-hover:border-purple-500/50 transition-colors">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold text-white/40 group-hover:text-white transition-colors cursor-pointer mt-auto">
                    <span className="uppercase tracking-wider text-xs">
                      Details
                    </span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 py-5 border-y border-white/5 bg-white/2 backdrop-blur-sm grid grid-cols-2 justify-items-center md:flex md:justify-around md:items-center gap-8 opacity-60">
          <span className="flex items-center gap-2 text-lg font-bold text-neutral-400">
            <Monitor size={20} className="text-purple-500" /> Photoshop
          </span>
          <span className="flex items-center gap-2 text-lg font-bold text-neutral-400">
            <Rocket size={20} className="text-pink-500" /> Illustrator
          </span>
          <span className="flex items-center gap-2 text-lg font-bold text-neutral-400">
            <Layout size={20} className="text-cyan-500" /> Figma
          </span>
          <span className="flex items-center gap-2 text-lg font-bold text-neutral-400">
            <Code2 size={20} className="text-blue-500" /> Webflow
          </span>
        </div>
      </div>
    </section>
  );
});

const Portfolio = memo(() => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Nebula Dashboard",
      category: "UI/UX",
      image:
        "https://images.unsplash.com/photo-1481487484168-9b930d5b7d9f?q=80&w=2600&auto=format&fit=crop",
      desc: "Crypto trading dashboard UI design with dark mode.",
      tags: ["Figma", "React"],
    },
    {
      id: 2,
      title: "Apex Fitness Brand",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2600&auto=format&fit=crop",
      desc: "Complete visual identity system for a modern gym.",
      tags: ["Illustrator", "Identity"],
    },
    {
      id: 3,
      title: "Cyberpunk City",
      category: "Vector Art",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
      desc: "Futuristic concept illustration for a game environment.",
      tags: ["Vector", "Art"],
    },
    {
      id: 4,
      title: "EcoTravel App",
      category: "UI/UX",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
      desc: "Sustainable travel booking app interface.",
      tags: ["Mobile", "UX"],
    },
    {
      id: 5,
      title: "Coffee Roasters",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2670&auto=format&fit=crop",
      desc: "Packaging design series for premium coffee beans.",
      tags: ["Packaging", "Logo"],
    },
    {
      id: 6,
      title: "Abstract Flow",
      category: "Vector Art",
      image:
        "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop",
      desc: "Colorful abstract wall art series for interiors.",
      tags: ["Abstract", "Wall Art"],
    },
  ];

  const categories = ["All", "UI/UX", "Branding", "Vector Art"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      className="relative z-10 py-24 bg-neutral-950 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="px-3 py-1 text-xs font-bold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400 uppercase">
              Selected Works
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            My Creative <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400">
              Portfolio
            </span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
          A few selected projects that define my creative journey.
          </p>
        </div>

        <div className="flex justify-center mb-16 px-4">
          <div className="flex flex-wrap gap-2 bg-neutral-900/80 p-1.5 md:p-2 rounded-full border border-white/10 backdrop-blur-xl shadow-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`cursor-pointer px-4 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all duration-300 relative overflow-hidden group ${
                  filter === cat
                    ? "text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {filter === cat && (
                  <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 rounded-full -z-10" />
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-4xl p-1 bg-linear-to-b from-white/10 to-white/5 hover:from-purple-500/50 hover:to-pink-500/50 transition-all duration-500 cursor-pointer hover:-translate-y-2"
            >
              <div className="h-[450px] w-full rounded-[1.8rem] overflow-hidden relative bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 transition-all duration-500" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="absolute top-6 right-6 flex flex-col gap-2 items-end">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-[10px] uppercase font-bold tracking-wider bg-black/50 backdrop-blur-md border border-white/10 text-white/80 rounded-full opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300"
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="mb-2">
                      <p className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-1">
                        {project.category}
                      </p>
                      <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-neutral-300/80 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      <span className="text-sm font-bold text-white group-hover:underline decoration-purple-500 underline-offset-4">
                        View Case Study
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <button className="px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-neutral-300 hover:text-white hover:bg-white/10 transition-all hover:scale-105 inline-flex items-center gap-2 group">
            <span>View All Projects on Behance</span>
            <ExternalLink
              size={16}
              className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
});

const Contact = memo(() => {
  return (
    <section
      id="contact"
      className="relative z-10 py-24 bg-neutral-950 overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

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
              If you have an amazing project idea or just want to say 'Hi', feel free to connect. I’m always ready for new challenges.
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
                <Instagram key="i" />,
                <Dribbble key="d" />,
                <Linkedin key="l" />,
                <Monitor key="m" />,
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300"
                >
                  {icon}
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
                    placeholder="Ahmed Raza"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider ml-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="ahmed@example.com"
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
    </section>
  );
});

const Footer = memo(() => {
  return (
    <footer className="border-t border-white/5  bg-black">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-tighter flex items-center gap-2 justify-center md:justify-start">
            <span className="w-8 h-8 bg-linear-to-tr from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-sm">
              A
            </span>
            Artifex.
          </h2>
          <p className="text-neutral-500 text-sm mt-2">
            Creating digital experiences that matter.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 text-sm font-medium text-neutral-400">
          <a href="#home" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#portfolio" className="hover:text-white transition-colors">
            Portfolio
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        <div className="text-neutral-600 text-sm">
          © 2024 Artifex Design. All rights reserved.
        </div>
      </div>
    </footer>
  );
});

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !scrolled) {
        setScrolled(true);
      } else if (window.scrollY <= 50 && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-purple-500 selection:text-white font-sans overflow-x-hidden relative">
      <GlobalStyles />

      <div className="fixed inset-0 z-0 pointer-events-none transform-gpu">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] will-change-transform" />
        <div className="absolute top-[40%] left-[-20%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] will-change-transform" />
      </div>

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-neutral-950/80 backdrop-blur-xl border-white/10 py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2 cursor-pointer group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-linear-to-tr from-purple-500 to-blue-500 rounded-xl rotate-6 group-hover:rotate-12 transition-transform opacity-80"></div>
              <div className="absolute inset-0 bg-neutral-900 rounded-xl border border-white/10 flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-linear-to-tr from-purple-400 to-blue-400 font-bold text-xl">
                  A
                </span>
              </div>
            </div>
            <span className="font-bold text-lg">
              Artifex<span className="text-purple-500">.</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {["Home", "Portfolio", "Services", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="cursor-pointer text-sm font-medium text-neutral-400 hover:text-white transition-colors hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] px-3 py-1 rounded-full"
              >
                {item}
              </button>
            ))}
            <button className="cursor-pointer px-6 py-2.5 bg-white text-black rounded-full text-sm font-bold hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95">
              Hire Me
            </button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <Hero scrollToSection={scrollToSection} />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
