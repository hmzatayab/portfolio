import { ArrowRight, BookOpen } from "lucide-react";
import { memo } from "react";

export const BookBanner = memo(() => {
  return (
    <section className="relative z-10 py-10 bg-neutral-900/80 border-t border-b border-white/5 backdrop-blur-lg overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-blue-900/20 via-transparent to-cyan-900/20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Text */}
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/5 rounded-full border border-white/10 text-cyan-400">
            <BookOpen size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              Read My Design Book
            </h3>
            <p className="text-sm text-neutral-400">
              Explore my design philosophy and tutorials.
            </p>
          </div>
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1cinl7GAUPh6Z_CYt_XY55Y1b2cB2duVp/view" // Replace with actual path
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:bg-cyan-100 transition-all shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:scale-105 active:scale-95 group"
          >
            Get the Book
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
});
