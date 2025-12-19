import { memo } from "react";

export const GlobalStyles = memo(() => (
  <style>{`
      @keyframes float-slow {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      @keyframes float-medium {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(5deg); }
      }
      @keyframes float-fast {
        0%, 100% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(-10px) scale(1.05); }
      }
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.2); }
        50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.5); }
      }
      @keyframes scroll-infinite {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
      }
      .animate-float-slow { animation: float-slow 6s ease-in-out infinite; will-change: transform; }
      .animate-float-medium { animation: float-medium 5s ease-in-out infinite; will-change: transform; }
      .animate-float-fast { animation: float-fast 4s ease-in-out infinite; will-change: transform; }
      .animate-pulse-glow { animation: pulse-glow 3s infinite; }
      .animate-scroll-infinite { animation: scroll-infinite 30s linear infinite; will-change: transform; }
    `}</style>
));
