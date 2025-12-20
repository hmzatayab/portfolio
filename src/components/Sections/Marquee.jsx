import { Clock } from "lucide-react";
import { memo } from "react";

export const Marquee = memo(() => {
  return (
    <section className="py-6 bg-neutral-950 border-t border-white/5 overflow-hidden group cursor-default">
      <div className="flex">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="flex shrink-0 animate-scroll-infinite group-hover:[animation-play-state:paused]"
          >
            <span className="text-[10vw] md:text-[8rem] font-black uppercase tracking-tighter text-neutral-800/50 whitespace-nowrap px-8 transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-500 group-hover:scale-100">
              Let's Talk — Start A Project — Get In Touch —
            </span>
          </div>
        ))}
      </div>
    </section>
  );
});

export const AvailabilityMarquee = memo(() => {
  return (
    <section className="py-3 bg-neutral-950/80 backdrop-blur-sm border-y border-white/5 overflow-hidden relative z-20">
      <div className="absolute inset-0 bg-green-500/5 pointer-events-none"></div> 
      <div className="flex select-none">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex shrink-0 animate-scroll-infinite-reverse group-hover:[animation-play-state:paused]">
            <span className="flex items-center gap-6 text-sm font-mono font-medium tracking-widest text-green-400/80 whitespace-nowrap px-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              AVAILABLE FOR NEW PROJECTS
              <span className="text-white/20">|</span>
              MON-SAT : 6:00 PM - 12:00 AM (PKT)
              <span className="text-white/20">|</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
});