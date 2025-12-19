import { Menu } from "lucide-react";
import { memo, useCallback, useEffect, useState } from "react";

export const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !scrolled) {
        setScrolled(true);
      } else if (window.scrollY <= 50 && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  }, []);
  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-neutral-950/80 backdrop-blur-xl border-white/10 py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2 cursor-pointer group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-linear-to-tr from-purple-500 to-blue-500 rounded-xl rotate-6 group-hover:rotate-12 transition-transform opacity-80"></div>
              <div className="absolute inset-0 bg-neutral-900 rounded-xl border border-white/10 flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-linear-to-tr from-purple-400 to-blue-400 font-bold text-xl">
                  A
                </span>
              </div>
            </div>
            <span className="font-bold text-lg">
              Artifex<span className="text-purple-500">.</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {["Home", "Portfolio", "Services", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="cursor-pointer text-sm font-medium text-neutral-400 hover:text-white transition-colors hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] px-3 py-1 rounded-full"
              >
                {item}
              </button>
            ))}
            <button className="cursor-pointer px-6 py-2.5 bg-white text-black rounded-full text-sm font-bold hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95">
              Hire Me
            </button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
    </>
  );
});
