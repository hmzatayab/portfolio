import { memo } from "react";

export const Footer = memo(() => {
  return (
    <footer className="border-t border-white/5  bg-black">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-tighter flex items-center gap-2 justify-center md:justify-start">
            <span className="w-8 h-8 bg-linear-to-tr from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-sm">
              G
            </span>
            Goeek.
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
          © 2025 Goeek Design. All rights reserved.
        </div>
      </div>
    </footer>
  );
});
