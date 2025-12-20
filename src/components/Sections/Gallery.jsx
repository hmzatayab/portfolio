import { ArrowUpRight, Sparkles } from "lucide-react";
import { memo, useState } from "react";
import imageOne from "../../assets/Gallary/3.jpg"
import imageTwo from "../../assets/Gallary/1.jpg"
import imageThree from "../../assets/Gallary/7.jpg"
import imageFour from "../../assets/Gallary/10.jpg"
import imageFive from "../../assets/Gallary/8.jpg"

export const FeaturedGallery = memo(() => {
  const [activeId, setActiveId] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Neon Cyberpunk",
      category: "3D Art",
      year: "2024",
      image: imageOne,
      behanceLink: "https://www.behance.net",
    },
    {
      id: 2,
      title: "Brand Identity",
      category: "Branding",
      year: "2023",
      image: imageTwo,
      behanceLink: "https://www.behance.net",
    },
    {
      id: 3,
      title: "Fluid Motion",
      category: "Motion",
      year: "2024",
      image: imageThree,
      behanceLink: "https://www.behance.net",
    },
    {
      id: 4,
      title: "Future Dashboard",
      category: "UI/UX",
      year: "2023",
      image: imageFour,
      behanceLink: "https://www.behance.net",
    },
    {
      id: 5,
      title: "Abstract Geo",
      category: "Art",
      year: "2022",
      image: imageFive,
      behanceLink: "https://www.behance.net",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative z-10 py-32 bg-neutral-950 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] -translate-y-1/2" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

        <div className="absolute top-1/6 left-0 -translate-y-1/2 w-full text-center overflow-hidden opacity-[0.03] select-none">
          <span className="text-[15rem] md:text-[20rem] font-black uppercase tracking-tighter whitespace-nowrap">
            GALLERY
          </span>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <Sparkles size={14} className="text-yellow-400" />
            <span className="text-xs font-bold tracking-widest text-white uppercase">
              Inspiration Board
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Visual{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
              Exploration
            </span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Mere kuch creative experiments aur designs ka collection.
          </p>
        </div>

        <div className="flex flex-col md:flex-row h-[600px] md:h-[600px] gap-4 w-full">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveId(project.id)}
              className={`relative rounded-4xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group border border-white/10 ${
                activeId === project.id
                  ? "flex-5 md:flex-10"
                  : "flex-1 hover:flex-[1.5]"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${
                  activeId === project.id
                    ? "scale-100"
                    : "scale-150 grayscale-50% group-hover:scale-125"
                }`}
              />

              <div
                className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${
                  activeId === project.id
                    ? "opacity-0"
                    : "opacity-60 group-hover:opacity-40"
                }`}
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent opacity-90" />

              <div
                className={`absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end h-full transition-all duration-500 delay-100 ${
                  activeId === project.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="mt-auto">
                  <div className="flex justify-between items-end mb-2">
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="text-4xl md:text-6xl font-bold text-white/10">
                      {project.id}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.behanceLink, "_blank");
                      }}
                      className="px-6 py-3 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-neutral-200 transition-colors"
                    >
                      View on Behance <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {activeId !== project.id && (
                <div className="hidden md:flex absolute inset-0 items-center justify-center">
                  <h3 className="-rotate-90 whitespace-nowrap text-2xl font-bold text-white/50 tracking-widest uppercase origin-center group-hover:text-white transition-colors">
                    {project.category}
                  </h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full opacity-50 animate-spin-slow duration-[20s]"></div>
    </section>
  );
});
