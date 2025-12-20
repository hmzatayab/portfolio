import { Briefcase, CheckCircle2, User } from "lucide-react";
import { memo, useCallback, useRef } from "react";

const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max);
const round = (v, precision = 3) => parseFloat(v.toFixed(precision));
const adjust = (v, fMin, fMax, tMin, tMax) =>
  round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

const ANIMATION_CONFIG = {
  INITIAL_DURATION: 1200,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  ENTER_TRANSITION_MS: 180,
};

export const ProfileCard = memo(
  ({
    name = "Hamza Tayyab",
    title = "Senior Product Designer",
    avatarUrl = "https://hamzatayyab.vercel.app/assets/hamza-Cxkvyec4.png",
    handle = "ahmed_dsgn",
    status = "Open for Work",
    onContactClick,
  }) => {
    const wrapRef = useRef(null);
    const shellRef = useRef(null);
    const enterTimerRef = useRef(null);
    const leaveRafRef = useRef(null);

    // Tilt Logic
    const handlePointerMove = useCallback((e) => {
      const shell = shellRef.current;
      if (!shell) return;
      const rect = shell.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const width = shell.clientWidth;
      const height = shell.clientHeight;
      const percentX = (x / width) * 100;
      const percentY = (y / height) * 100;
      const centerX = percentX - 50;
      const centerY = percentY - 50;

      shell.style.setProperty("--pointer-x", `${percentX}%`);
      shell.style.setProperty("--pointer-y", `${percentY}%`);
      shell.style.setProperty("--rotate-x", `${-(centerY / 3.5)}deg`);
      shell.style.setProperty("--rotate-y", `${centerX / 3.5}deg`);
      shell.style.setProperty(
        "--pointer-from-center",
        `${Math.min(Math.hypot(centerY, centerX) / 50, 1)}`
      );
    }, []);

    const handlePointerLeave = useCallback(() => {
      const shell = shellRef.current;
      if (!shell) return;
      shell.style.setProperty("--rotate-x", "0deg");
      shell.style.setProperty("--rotate-y", "0deg");
      shell.style.setProperty("--pointer-from-center", "0");
    }, []);

    return (
      <div
        ref={wrapRef}
        className="pc-card-wrapper w-[320px] h-[420px] md:w-[380px] md:h-[480px] cursor-pointer"
        onMouseMove={handlePointerMove}
        onMouseLeave={handlePointerLeave}
      >
        <div
          ref={shellRef}
          className="pc-card-shell shadow-2xl shadow-purple-900/20"
        >
          <section className="pc-card flex flex-col items-center justify-center p-8 text-center relative group">
            
            <div className="absolute inset-0 bg-linear-to-br from-purple-900/40 via-neutral-900/80 to-blue-900/40 z-0"></div>
            <div className="pc-glare z-10"></div>

            
            <div className="relative z-20 flex flex-col items-center w-full">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full p-1 bg-linear-to-tr from-purple-500 to-blue-500 shadow-lg shadow-purple-500/20">
                  <img
                    src={avatarUrl}
                    alt={name}
                    className="w-full h-full object-cover rounded-full border-4 border-neutral-900"
                  />
                </div>
                <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-neutral-900 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={12} className="text-black" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
              <p className="text-neutral-400 font-medium mb-4">{title}</p>

              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-xs text-neutral-300 font-medium">
                  {status}
                </span>
              </div>

              <div className="w-full flex gap-3">
                <button
                  onClick={onContactClick}
                  className="flex-1 py-3 rounded-xl bg-white text-black font-bold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                >
                  Hire Me <Briefcase size={16} />
                </button>
                <button className="p-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/10">
                  <User size={20} />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
);
