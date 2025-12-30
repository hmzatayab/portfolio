import {
  ArrowRight,
  Clapperboard,
  ImageIcon,
  Layout,
  Monitor,
  Palette,
  PenTool,
  Rocket,
} from "lucide-react";
import { memo, useState } from "react";
import { ServiceModal } from "../ServiceModal";

export const Services = memo(() => {
  const [selectedService, setSelectedService] = useState(null);

  const servicesList = [
    {
      title: "Brand Identity",
      desc: "Logos, color palettes, and visual guidelines that make your brand unique.",
      longDesc:
        "We don’t just create logos we design the complete DNA of your brand. This includes logo design, color psychology, typography selection, and visual guidelines that make your brand consistent and memorable.",
      tags: [
        "Logo Design",
        "Brand Guidelines",
        "Typography",
        "Color Palette",
        "Stationery",
      ],
      icon: <Palette size={32} />,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "UI/UX Design",
      desc: "Clean, modern, and user-friendly interfaces for websites and mobile apps.",
      longDesc:
        "A user-centric design approach that looks beautiful and works smoothly. From wireframing to high-fidelity prototypes, we handle everything so you can experience the final product even before development starts.",
      tags: [
        "Wireframing",
        "Prototyping",
        "Mobile Apps",
        "Web Design",
        "User Research",
      ],
      icon: <Layout size={32} />,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Social Media",
      desc: "Engaging posts and banners for Instagram and LinkedIn that grab attention.",
      longDesc:
        "Grabbing attention on social media is essential today. We create visuals that stop the scroll Instagram reels, static posts, and LinkedIn carousels designed to boost engagement.",
      tags: [
        "Instagram Posts",
        "LinkedIn Carousels",
        "Reels Assets",
        "Ad Creatives",
        "Banners",
      ],
      icon: <ImageIcon size={32} />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Vector Art",
      desc: "Custom illustrations and vector graphics that take your content to the next level.",
      longDesc:
        "Custom illustrations that are better than stock photos. Using vector art, we simplify complex ideas in a visually appealing way. Scalable graphics that look perfect at every size.",
      tags: [
        "Custom Illustrations",
        "Iconography",
        "Mascot Design",
        "Infographics",
        "Vector Tracing",
      ],
      icon: <PenTool size={32} />,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section
      id="services"
      className="relative z-10 py-24 bg-neutral-950 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-20 left-0 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(0,0,0,0) 70%)",
            transform: "translate3d(0,0,0)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px]"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(0,0,0,0) 70%)",
            transform: "translate3d(0,0,0)",
          }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="absolute top-1/6 left-0 -translate-y-1/2 w-full text-center overflow-hidden opacity-[0.03] select-none">
        <span className="text-[15rem] md:text-[20rem] font-black uppercase tracking-tighter whitespace-nowrap">
          Services
        </span>
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
            I don’t just create designs; I tell brand stories through visual
            language. Every pixel reflects innovation and detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="group relative p-1 rounded-3xl bg-linear-to-b from-white/10 to-white/5 hover:from-purple-500/50 hover:to-blue-500/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-full bg-neutral-900/90 backdrop-blur-xl rounded-[1.3rem] p-8 flex flex-col relative overflow-hidden">
                <div className="absolute -right-4 -bottom-8 text-[8rem] font-bold text-white/5 group-hover:text-white/10 transition-colors select-none leading-none z-0">
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

        <div className="mt-16 py-5 border-y border-white/5 bg-white/5 backdrop-blur-sm grid grid-cols-2 justify-items-center md:flex md:justify-around md:items-center gap-8 opacity-60">
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
            <Clapperboard size={20} className="text-indigo-500" /> After Effects
          </span>
        </div>
      </div>

      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/6 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full opacity-50 animate-spin-slow duration-[20s]"></div>
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full opacity-50 animate-spin-slow duration-[20s]"></div>

      <ServiceModal
      className="z-50"
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
});
