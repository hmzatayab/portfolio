import { memo } from "react";
import { ArrowRight, Layers, MousePointer2, PenTool } from "lucide-react";
import profileImage from "../../assets/hamza.png";
import { Background } from "../Background";

export const Hero = memo(({ scrollToSection }) => {
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

      <Background />

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
            I create visual stories. From websites to brand identity, every
            design is driven by purpose and innovation.
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
              {[
                { src: "https://i.pravatar.cc/120?img=12", alt: "Client 1" },
                { src: "https://i.pravatar.cc/120?img=32", alt: "Client 2" },
                { src: "https://i.pravatar.cc/120?img=56", alt: "Client 3" },
                { src: "https://i.pravatar.cc/120?img=68", alt: "Client 4" },
              ].map((avatar, i) => (
                <div
                  key={avatar.src}
                  className="w-12 h-12 rounded-full border-2 border-neutral-950 bg-neutral-800 overflow-hidden"
                  style={{ zIndex: 10 - i }}
                >
                  <img
                    src={avatar.src}
                    alt={avatar.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
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
