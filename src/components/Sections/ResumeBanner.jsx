import { Download, FileText } from "lucide-react";
import { memo } from "react";

export const ResumeBanner = memo(() => {
  return (
    <section className="relative z-10 py-10 bg-neutral-900/50 border-t border-b border-white/5 backdrop-blur-lg overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/5 rounded-full border border-white/10 text-purple-400">
            <FileText size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              Want to see my Resume?
            </h3>
            <p className="text-sm text-neutral-400">
              Detailed experience and skills breakdown in PDF.
            </p>
          </div>
        </div>

        <div>
          <a
            href="https://drive.google.com/file/d/11bGFmwTCiglM6tOIs-0ff3muP-9Iw6Nt/view?usp=sharing" // Replace with actual path
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 group"
          >
            Download CV
            <Download
              size={18}
              className="group-hover:translate-y-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
});
