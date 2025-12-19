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
