import { memo, useState } from "react";
import { Background } from "../Background";
import { ArrowRight, ExternalLink } from "lucide-react";

export const Portfolio = memo(() => {
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
      <Background />

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
