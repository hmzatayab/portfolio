import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { useEffect } from "react";

export const ServiceModal = ({ service, onClose }) => {
  useEffect(() => {
    if (service) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [service]);
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-neutral-900 border border-white/10 rounded-3xl p-8 shadow-2xl m-4 transform animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/5 rounded-full text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div
              className={`p-4 rounded-2xl bg-linear-to-br ${service.color} text-white shadow-lg`}
            >
              {service.icon}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">{service.title}</h2>
              <div className="h-1 w-12 bg-linear-to-r from-purple-500 to-blue-500 rounded-full mt-2"></div>
            </div>
          </div>

          <p className="text-neutral-300 text-lg leading-relaxed">
            {service.longDesc}
          </p>

          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white/50 uppercase tracking-widest">
              Included Features
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-purple-200 flex items-center gap-2"
                >
                  <CheckCircle2 size={12} className="text-green-400" /> {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-2 border-t border-white/10 flex justify-end">
            <button className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-colors flex items-center gap-2">
              <a href="https://bit.ly/3LqKVbv">
                <div className="flex items-center gap-2">
                  <div>Get Started with {service.title}</div>{" "}
                  <div>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
