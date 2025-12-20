import { memo } from "react";
import { ProfileCard } from "../ProfileCard";
import { Sparkles } from "lucide-react";

export const AboutUs = memo(({ scrollToSection }) => {
  return (
    <section
      id="about"
      className="relative z-10 py-32 bg-neutral-950 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

        <div className="absolute top-1/6 left-0 -translate-y-1/2 w-full text-center overflow-hidden opacity-[0.03] select-none">
          <span className="text-[15rem] md:text-[20rem] font-black uppercase tracking-tighter whitespace-nowrap">
            Passion
          </span>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="px-3 py-1 text-xs font-bold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-green-400 uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold leading-none tracking-tight">
              Creative Mind, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-green-400">
                Technical Soul.
              </span>
            </h2>

            <div className="space-y-6 text-neutral-400 text-lg leading-relaxed border-l-2 border-white/10 pl-6">
              <p>
                My name is Hamza, and I am a passionate Graphic Designer and
                UI/UX Artist. I don't just create designs; I give brands a new
                identity.
              </p>
              <p>
                Over the past 6 years, I have worked with 30+ international and
                local clients. My philosophy is simple:{" "}
                <span className="text-white font-medium">
                  "Design that speaks volumes without words."
                </span>
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-bold text-white/50 uppercase tracking-widest">
                My Toolkit
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Photoshop",
                  "Illustrator",
                  "Figma",
                  "Premiere Pro",
                  "After Effects",
                  "Lightroom",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-neutral-300 hover:bg-white/10 hover:text-white transition-colors cursor-default backdrop-blur-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4">
              {[
                { label: "Years Exp.", value: "06+" },
                { label: "Projects", value: "50+" },
                { label: "Clients", value: "30+" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-neutral-900/50 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all hover:-translate-y-1 group"
                >
                  <h4 className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {stat.value}
                  </h4>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute top-10 -left-10 z-20 hidden md:block animate-float-slow">
              <div className="bg-neutral-900/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="bg-green-500/20 p-2 rounded-full text-green-400">
                  <Sparkles size={20} />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-bold uppercase">
                    Status
                  </p>
                  <p className="text-sm font-bold text-white">
                    Available for Hire
                  </p>
                </div>
              </div>
            </div>

            <ProfileCard
              name="Hamza Tayyab"
              title="Senior Creative Designer"
              status="Online"
              onContactClick={() => scrollToSection("contact")}
            />

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full opacity-50 animate-spin-slow duration-[20s]"></div>
          </div>
        </div>
      </div>
    </section>
  );
});
