import { memo } from "react";
import logoImageTwo from "../../assets/rosoro.png";
import logoImageThree from "../../assets/Taar.png";
import logoImageFour from "../../assets/Stenceils.png";
import logoImageFive from "../../assets/goeek.png";
import logoImageSix from "../../assets/fourovr.png";
import logoImageSeven from "../../assets/Amaze.png";

export const Brands = memo(() => {
  const brands = [
    { name: "StarTrack", logo: logoImageFive },
    { name: "StarTrack", logo: logoImageSix },
    { name: "StarTrack", logo: logoImageThree },
    { name: "StarTrack", logo: logoImageFour },
    { name: "StarTrack", logo: logoImageSeven },
    { name: "StarTrack", logo: logoImageTwo },
  ];

  return (
    <section className="py-12 border-b border-white/5 bg-neutral-950 relative z-20">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-bold text-neutral-600 uppercase tracking-[0.2em] mb-8 animate-pulse">
          Trusted by Innovative Companies
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {brands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="group cursor-default"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                loading="lazy"
                decoding="async"
                className="h-10 md:h-12 w-auto opacity-60 grayscale brightness-110 contrast-125 transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
