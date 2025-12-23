import { Box, Heart, Quote } from "lucide-react";
import { memo } from "react";

export const Testimonials = memo(() => {
  const reviews = [
    {
      id: 1,
      name: "Ali Raza",
      role: "Founder of TechSolutions",
      text: "Ahmed's work is outstanding! He gave our brand identity a completely new look. Highly recommended.",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&q=80",
    },
    {
      id: 2,
      name: "Sana Khan",
      role: "Creative Lead at DesignHub",
      text: "Communication was very smooth and delivery was ahead of schedule. Design quality is top-notch.",
      avatar:
        "https://images.unsplash.com/photo-1520785643438-5bf77931f493?w=150&q=80",
    },
    {
      id: 3,
      name: "Usman Ahmed",
      role: "CTO at InnovateX",
      text: "UI designs are both user-friendly and aesthetic. The development team also easily received the assets.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    },
  ];

  return (
    <section className="relative z-10 py-32 bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[100px] -translate-y-1/2" />
        <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

        <div className="absolute top-1/6 left-0 -translate-y-1/2 w-full text-center overflow-hidden opacity-[0.03] select-none">
          <span className="text-[15rem] md:text-[20rem] font-black uppercase tracking-tighter whitespace-nowrap">
            TRUST
          </span>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <Heart size={14} className="text-red-400" />
            <span className="text-xs font-bold tracking-widest text-white uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-yellow-400">
              Stories
            </span>
          </h2>
          <p className="text-neutral-400 text-lg">
            What clients say about my work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="p-8 rounded-4xl bg-white/5 border border-white/10 backdrop-blur-md relative hover:-translate-y-2 hover:bg-white/10 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group animate-in fade-in slide-in-from-bottom-8"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute top-8 right-8 text-white/10 group-hover:text-orange-500/20 transition-colors">
                <Quote size={40} />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full border-2 border-orange-500/50 object-cover"
                />
                <div>
                  <h4 className="text-white font-bold text-lg leading-tight">
                    {review.name}
                  </h4>
                  <p className="text-neutral-400 text-xs uppercase tracking-wider">
                    {review.role}
                  </p>
                </div>
              </div>

              <p className="text-neutral-300 leading-relaxed relative z-10">
                "{review.text}"
              </p>

              <div className="flex gap-1 mt-6 text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Box
                    key={star}
                    size={14}
                    fill="currentColor"
                    className="text-yellow-500"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full opacity-50 animate-spin-slow duration-[20s]"></div>
    </section>
  );
});
